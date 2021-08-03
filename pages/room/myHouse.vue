<template>
	<view>
		<view class="ihouse">
			<!-- <cl-divider>个人主页</cl-divider>		 -->
			<cl-card class="icard" label="个人主页" :showMore="false" style="background-color: #dcdfe6;">
				<view class="ishow" >
					<view @click="avaPage()">
						<cl-avatar :src="myImg" shape="circle" class="eimg" :size="160" ></cl-avatar>
					</view>
					<text style="font-size: 30px;">{{myName}}</text>
					<cl-button type="primary"  plain @click="avaPage()"
						style="margin-left: auto; margin-right: 20rpx;">按钮</cl-button>
				</view>
				<view style="display: flex; flex-direction: column;  align-items: center;">
						<cl-action-sheet ref="action-logout"></cl-action-sheet>
						<button size="120"  @click="logout()">退出</button>
				</view>
			</cl-card>
			
		</view>
		


	 </view>
</template>

<script>
	import clAvatar from 'cl-uni/components/cl-avatar/cl-avatar';
	export default {
		data() {
			return {
				myName:'君の名は',
				myImg: '../../static/cat.jpeg',
				myId: '1',
			}
		},
		methods: {
			logout() {
				this.$refs["action-logout"].open({
					list: [
						{
							label: "确认要退出吗？",
							disabled: true,
							size: "26rpx"
						},
						{
							label: "确定"
						}
					],
					callback: ({ action }) => {
						if(action==1){
							uni.removeStorageSync("user");
							uni.removeStorageSync("Ava"+this.myId);
							uni.navigateTo({
								url:'../index/login'
							})
						}
						console.log(action);
					}
				});
			},
			avaPage(){
				uni.navigateTo({
					url:'avaPage/avaPage?img='+this.myImg,
				})
			},
		},
		mounted() {
			this.myId = uni.getStorageSync("user");
			this.myImg = uni.getStorageSync('Ava'+ this.myId);
			var myInfo = uni.getStorageSync("myInfo");
			
			uni.request({
				url:'/web/user/getUser',
				method:'GET',
				success: (res) => {
					console.log("session获得的方法：" + res.data)
					var res = res.data;
					if(res.code==200){
						this.myName = res.data.nickName;
						uni.setStorageSync("myInfo",res.data);
					}
				}
			})
			
			// if(myInfo == null){
			// this.$axios({
			// 		url:'/user/getUser/' + this.myId,
			// 		method:'GET'				
			// }).then((res)=>{
			// 		// console.log(res.data)
			// 		if(res.code==200){
			// 			this.myName = res.data.nickName;
			// 			uni.setStorageSync("myInfo",res.data);
			// 		}
			// 	})
			// }
		},
		comments:{clAvatar}
	}
</script>

<style>
.ihouse{
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	/* background-color: #0066CC; */
}
.ishow{
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100vw;
	/* padding: 5rpx; */
	/* background-color: #8F8F94; */
}
 .eimg{
 	margin: 5px;
	margin-left: 30rpx;
	margin-top: 16rpx;
 	/* padding: 10px; */
/* 	width: 75rpx;
 	height: 75upx; */
 }
</style>
