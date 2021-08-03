<template>
	<view>
		<cl-card label="好友列表" :show-more="false">
			<cl-icon name="cl-icon-friend" slot="append"></cl-icon>
			<view v-for="(item,index) in frdList" :key="index">
				<cl-list-item type="success" @click="startChat(item)">
					<view class="cs-block">
						<cl-avatar
							:src="item.ava"
						></cl-avatar>
						<text style="margin-left: 20rpx;">{{item.frdName}}</text>
					</view>
				</cl-list-item>
				<cl-divider></cl-divider>
			</view>
		</cl-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				frdList: [
				],
				ava:[],
				chatId: '1',
				frdId: '2',
			}
		},
		methods: {
			async pageInit(){
				this.frdList = [],
				
				await this.$axios({
					url:"/frd/getFrd/"+uni.getStorageSync('user'),
					method:'GET',
				}).then((data)=>{
					var data = data.data;
					// console.log(data)
					for(var i=0;i<data.length;i++){
						// console.log(data[i])					
						var c  = {
							frdName: data[i].friendName,
							frdId: data[i].friend,
							chatId: data[i].chatId,
							index: i,
							ava: '',
						};
						this.frdList.push(c);
						}
					})
				
				for(var i=0;i<this.frdList.length;i++)
					await this.getAvatar(this.frdList[i].frdId,i);
			},
			startChat(e){
				
				uni.navigateTo({
					url:"../room/room?chatId="+e.chatId+"&frdId="+e.frdId,
					animationType: "pop-in",
				})
			},
			getAvatar(e,j){
				var that = this;
				
				this.$axios({
					method:'GET',
					url:"/user/getAvatar/"+e,
				}).then(res=>{
					that.frdList[j].ava = "data:image/jpeg;base64,"+res.data;
					uni.setStorageSync("Ava"+e, that.frdList[j].ava);
				})
			
			}
		},
		created() {
			console.log("created");
		},
		mounted() {
			console.log("mounted");
			this.pageInit();
		}
			
	}
</script>

<style>
.cs-block {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 20rpx 10rpx;
		/* background-color: #0066CC; */

		/deep/.cl-avatar {
			height: 100rpx;
			width: 100rpx;
			margin-right: 30rpx;
			border-radius: 10rpx;
		}
	
	}
</style>
