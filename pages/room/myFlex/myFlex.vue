<template>
    <view>
		<scroll-view ref="scroller" :scroll-y="true" 
		class="container" v-if="flag" :scroll-into-view="recognize">
			<view v-for="(item,index) in items" :key="index">
			  <log :content="item.content" :sid="item.fromId" v-if="item.type=='text'" :id="'recognize' + index"></log>
			  <img-log v-if="item.type=='img'" :ava="item.content" :fromId="item.fromId" :id="'recognize' + index"></img-log>
			</view>
        </scroll-view>
    </view>
</template>

<script>    
	import log from './log'
	import inputBox from '../inputBox/inputBox'
	import imgLog from '../imgLog/imgLog'
    export default{
		props:['chatId','frdId'],
        data() {
            return {
				recognize: 'recognize0',
				pagetop: 0,
				socketTask: null,
				// 确保websocket是打开状态
				is_open_socket: false,
				items: [],
				fresh: true,
				myId: '',
				// chatId: 'abc1234',
				// frdId: '3',
				bottom: '',
				flag: true,
            }
        },
        methods: {
			gotoBottom(){
				console.log(this.pagetop)
				setTimeout(()=>{
					this.recognize = 'recognize' + this.pagetop;
				})
			},
			chg(e){
				console.log('change')
				if(e==true){
					this.$refs.scroller.height = "57vh";
				}else{
					this.$refs.scroller.height = "87vh";
				}
			},
			async getImgList(e){
				var img = e;
				console.log(img.length);
				var len = 8000;
				var part = Math.ceil(img.length/len);
				this.num = part;
				var imgId = new Date().getTime();
				var p = {
					fromId: String(this.myId),
					toId: this.frdId,
					type: 'img',
					num: i,
					id:  String(this.myId)+ '-' + String(this.frdId)+ '-' + String(imgId) + '-' + '0',
					content: '',
				};
				for(var i=0; i<=part;i++){
					p.num = i;
					if(i==0){
						p.content = part;
					}else if(i==1){
						p.content = img.substr(0,len);
					}else if(i==part){
						p.content = img.substr((i-1)*len,img.length-(i-1)*len);
					}else{
						p.content = img.substr((i-1)*len,len);
					}
					var p1 = JSON.stringify(p);
					await  this.socketTask.send({
						data: p1,
					})
				}
			},
			async init(){
				var myId = uni.getStorageSync('user')
				var that = this;
				console.log(that.frdId)

				await uni.request({
					url: 'http://106.15.170.74:8082/msg/hist/'+ that.frdId +"/" + myId,
					method: 'get',
					success:async (res) => {
						var data = res.data.data;
						// console.log(data)
						this.pagetop = data.length-1;
						for(var i=0;i<data.length;i++){
							// data[i].type='text';
							this.items.push(data[i]);
							if(data[i].type=='img')
								await this.loadPhotos(this.items.length-1);
							}
						},
				})
				this.gotoBottom();
			},
			loadPhotos(e){
				uni.request({
					url:'http://106.15.170.74:8082/msg/getImg',
					method:'GET',
					data: {imageName: this.items[e].content},
					success:async (res) => {
					  this.items[e].content =  res.data.data.img;
					}
				})
			},
			onDown(){
				this.$refs.scroller.end();
			},
			getSrcList(a,b){
				var tmp = {fromId:b,content:a};
				// console.log(tmp.id)
				// this.items.push(tmp);
				var p = {
					fromId:this.myId,
					toId: this.frdId,
					content:a,
					type:'text',
				};
				p = JSON.stringify(p);
				console.log(p)
				this.socketTask.send({
					data:p,
					async success() {
						console.log("消息发送成功");
					},
				})
				// this.$refs.scroller.scrollTo(bottom);
			},
			// 进入这个页面的时候创建websocket连接【整个页面随时使用】
			connectSocketInit() {
				var that = this;
				// 创建一个this.socketTask对象【发送、接收、关闭socket都由这个对象操作】
				this.socketTask = uni.connectSocket({
					// 【非常重要】必须确保你的服务器是成功的,如果是手机测试千万别使用ws://127.0.0.1:9099【特别容易犯的错误】
					url: "ws://106.15.170.74:8082/webSocket/"+that.chatId,
					// url: "ws://localhost:8082/webSocket/"+that.chatId,
					success(data) {
						console.log("websocket连接成功");
					},
				});
 
				// 消息的发送和接收必须在正常连接打开中,才能发送或接收【否则会失败】
				this.socketTask.onOpen((res) => {
					console.log("WebSocket连接正常打开中...！");
					this.is_open_socket = true;
					// 注：只有连接正常打开中 ，才能正常成功发送消息
				})
				// 这里仅是事件监听【如果socket关闭了会执行】
				this.socketTask.onClose(() => {
					console.log("已经被关闭了")
				})
				this.socketTask.onMessage(function(e){
					// console.log("接收到消息："+e.data)
					// console.log("来方：" + e.data.fromId)
					// console.log("自己："+that.myId)
					// var msg = JSON.parse(String(e.data))
					var obj = JSON.parse(e.data);
					var msg = JSON.parse(e.data).data;
					console.log(msg.fromId)
					if(obj.type=='text'){
						that.items.push({
							fromId: msg.fromId,
							content: msg.content,
							type: 'text',
						})
					}else if(obj.type=='img'){
						that.items.push({
							fromId: msg.fromId,
							content: msg.content,
							type: 'img',
						})
					}
					
				})
			},
			// 关闭websocket【离开这个页面的时候执行关闭】
			closeSocket() {
				this.socketTask.close({
					success(res) {
						this.is_open_socket = false;
						console.log("关闭成功", res)
					},
					fail(err) {
						console.log("关闭失败", err)
					}
				})
			},
			clickRequest() {
							if (this.is_open_socket) {
								// websocket的服务器的原理是:发送一次消息,同时返回一组数据【否则服务器会进去死循环崩溃】
								this.socketTask.send({
									data: "请求一次发送一次message",
									async success() {
										console.log("消息发送成功");
									},
								});
							}
						},
        },
		watch:{
		    items(curVal,oldVal){
		     if(curVal){
		       this.items=curVal;
			   this.fresh = false;
			   this.fresh = true;
		      }
		   },
		},
		created() {
			// eslint-disable-next-line
			// this.connectSocketInit();
		},
		mounted() {
			this.myId = String(uni.getStorageSync('user'));
			this.init();
			this.connectSocketInit();
		},
		beforeUpdate() {
			// eslint-disable-next-line
			console.log('list before update')
		},
		updated() {
			// eslint-disable-next-line
			console.log('list updated')
		},
		beforeDestroy() {
			// 及时销毁，否则可能造成内存泄露
			// event.$off('onAddTitle', this.addTitleHandler)
		},

		components:{log,inputBox,imgLog},
    }
</script>

<style>
	.container{
		position: absolute;
		display: flex;
        flex-direction: column;
        /* justify-content: flex-start; */
        align-items: flex-start;
        /* background-color: #f3f3f3; */
		height: 100%;
		width: 100%;
	}
</style>
