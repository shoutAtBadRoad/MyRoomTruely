<template>
	<view>
		<view :class="uid==myId ? eright : eleft">
			<view :class="uid==myId ? b : a">
				<img :src="ava" alt="" class="eimg">
				<text class="etext" :style="textStyle" >{{text}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['content','id'],
		data() {
			return {
				myId: '',
				uid: '',
				text: '',
				eleft: 'eleft',
				eright: 'eright',
				a: 'a',
				b: 'b',
				eheight: 100,
				textStyle: {
					width: '',
					height: '',
				},
				ava:'../../../static/cat.jpeg',
				// content:'',
			}
		},
		async mounted(){
			this.myId = uni.getStorageSync('user');
			this.uid = this.id;
			this.text = this.content;
			this.ava = uni.getStorageSync("Ava"+this.uid);
			if(this.ava==null){
				await this.getMyAva(this.uid);
				this.ava = uni.getStorageSync("Ava"+this.uid);
			}
			// console.log(this.ava)
			var h = this.hw(this.content);
			this.eheight = h*40;
			if(this.eheight < 80){
				this.eheight = 80;
			}
			this.textStyle.height = this.eheight + 'px';
			// if(this.row==1){
			// 	this.textStyle.width = this.content.length*12 + 'px';
			// }else{
				this.textStyle.width = 100+'px';
			
		},
		methods: {
			async getMyAva(e){
				await this.axios.request({
					url:'/user/getAvatar/'+e,
					method:"GET"
				}).then((res)=>{
					uni.setStorageSync("Ava"+e,"data:image/jpeg;base64,"+res.data.data);
				})
			},
			hw(e){
				if(e==null)
					return;
				var score = 0;
				for(var i=0;i<e.length;i=i+1){
					if(e.charCodeAt(i)>=127){
						score += 10;
					}else{
						score += 6;
					}
				}
				var h = 0;
				while(score-60 > 0) {
					h += 1;
					score -= 60;
				}
				// console.log("高度为"+h);
				return h;
			},
		}
	}
</script>

<style>
	.eright{
		display: flex;
		flex-direction: column;
		/* justify-content: flex-start; */
		align-items: flex-end;
		/* background-color: #C8C7CC; */
		width: 100vw;
		/* height: 10vh; */
	}
	.eleft {
		display: flex;
	    flex-direction: column;
	    /* justify-content: flex-start; */
	    align-items: flex-start;
	    /* background-color: #C8C7CC; */
	    width: 100vw;
	    /* height: 10vh; */
	}
	.a {
		/* 定义flex容器 */
		display: flex;
		 /*设置容器内部容器的排列方向*/	
		flex-direction: row; 
	   /* height: 120upx; */
	   /* width: 100upx; */
/* 	    background-color: #4CD964;
	    border: 1upx solid #FFFFFF; */
		/* padding: 10px; */
		margin: 10px;
	}
	.b {
		/* 定义flex容器 */
		display: flex;
		 /*设置容器内部容器的排列方向*/	
		flex-direction: row-reverse; 
		/* align-items:flex-end; */
	   /* height: 120upx; */
	   /* width: 100upx; */
/* 	    background-color: #4CD964;
	    border: 1upx solid #FFFFFF; */
		/* padding: 10px; */
		margin: 10px;
	}
 .eimg{
 	margin: 5px;
 	/* padding: 10px; */
 	border-radius: 10px;
 	/* border: #8F8F94; */
 	/* -moz-box-shadow:0 0 10px #06c; */
 	-webkit-box-shadow:0 0 2px;
     /* box-shadow:0 0 10px #06c; */
 	width: 75rpx;
 	height: 75upx;
 }
 .etext{
 	margin: 5px;
 	padding: 2px;
 	border-radius: 10px;
 	border: #8F8F94;
 	/* -moz-box-shadow:0 0 10px #06c; */
 	-webkit-box-shadow:0 0 2px;
 	/* box-shadow:0 0 10px #06c; */
 	width: 100rpx;
 	height: 80rpx;
	
	word-break:break-all;
 }
</style>
