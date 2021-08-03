<template>
    <view>
		<cl-scroller ref="scroller"  :bottom="0"  @down="onDown" scroll-y="true" class="container">
			<view v-for="(item,index) in items" :key="index">
			  <log :content="item.content" :id="item.fromId"></log>
			</view>
        </cl-scroller>
    </view>
</template>

<script>    
	import log from './log'
	import inputBox from '../inputBox/inputBox'
    export default{
		props:['chatId','frdId'],
        data() {
            return {
				socketTask: null,
				// 确保websocket是打开状态
				is_open_socket: false,
				items: [],
				fresh: true,
				myId: '',
				// chatId: 'abc1234',
				// frdId: '3',
				bottom: '',
            }
        },
        methods: {
			async init(){
				var myId = uni.getStorageSync('user')
				var that = this;
				console.log(that.frdId)
				await this.axios.request({
					url: '/msg/hist/'+ that.frdId +"/" + myId,
					method: 'get',
					params: {},
				}).then(function({data}){
					// console.log(data);
					for(var i=0;i<data.length;i++){
						// console.log(data[i]);
						that.items.push(data[i]);
					}
					// console.log(this.items);
					if(data!=false){
						console.log("load success");
					}else{
						console.log("load fail");
					}
				})
				// console.log("初始化数据："+ this.items);
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
					// url: "ws://106.15.170.74:8082/webSocket/"+that.chatId,
					url: "ws://localhost:8082/webSocket/"+that.chatId,
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
					console.log("接收到消息："+e.data)
					console.log("来方：" + e.data.fromId)
					console.log("自己："+that.myId)
					var msg = JSON.parse(String(e.data))
					if(String(msg.fromId) != String(that.myId)){
						that.items.push({
							fromId: msg.fromId,
							content: msg.content,
						})
					}else{
						console.log('自己的消息')
						that.items.push({
							fromId: that.myId,
							content: msg.content,
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
			this.myId = uni.getStorageSync('user');
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

		components:{log,inputBox},
    }
</script>

<style>
	.container{
		position: absolute;
		display: flex;
        flex-direction: column;
        /* justify-content: flex-start; */
        align-items: flex-start;
        background-color: #f3f3f3;
        width: 100vw;
        height: 87vh;
	}
</style>
