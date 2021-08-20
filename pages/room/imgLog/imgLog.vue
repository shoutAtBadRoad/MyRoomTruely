<template>
	<view>
		<view :class="myId==fromId ? eright : eleft">
			<view :class="fromId==myId ? b : a">
				<img :src="myAva" alt="" class="eimg" />
				<img :src="ava" class="etext"  />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['ava','fromId'],
		data() {
			return {
				myId: '',
				uid: '',
				src: '',
				eleft: 'eleft',
				eright: 'eright',
				a: 'a',
				b: 'b',
				myAva: '',
			}
		},
		methods: {
		},
		mounted() {
			// this.uid = this.fromId;
			console.log('uid==' + this.fromId)
			this.myId = uni.getStorageSync('user');
			this.myAva = uni.getStorageSync('Ava'+this.fromId)
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
	    /* background-color: #4CD964; */
	    border: 1upx solid #FFFFFF;
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
	    /* background-color: #4CD964; */
	    border: 1upx solid #FFFFFF;
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
 	/* border: #8F8F94; */
 	/* -moz-box-shadow:0 0 10px #06c; */
 	-webkit-box-shadow:0 0 2px;
 	/* box-shadow:0 0 10px #06c; */
 	/* width: 100rpx; */
 	/* height: 80rpx; */
	width: 80vw;
	/* height: 25vh; */
	word-break:break-all;
 }
</style>
