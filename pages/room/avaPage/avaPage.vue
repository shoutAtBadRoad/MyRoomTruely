<template>
	<view>
		<view class="myAvatar">
			<cl-divider>当前头像</cl-divider>
			<image
				style="margin-top: 5%;margin-bottom: 5%;width: 200px; height: 200px"
				:src="src+'?key='+time" 
				mode="aspectFill"
				></image>
			<cl-divider>上传新头像</cl-divider>
			<cl-upload ref="upload" 
			@beforeUpload="before()" @success="imgOnSuccess()" 
			v-model="url" :action="action" v-if="flag" :data="uploadData"></cl-upload>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				myId: '1',
				// src: "http://106.15.170.74:8082/",
				action: 'http://106.15.170.74:8082/user/uploadAvatar',
				src: '',
				url: '',
				time: '',
				flag: true,
				uploadData:{},
			}
		},
		methods: {
			async imgOnSuccess(){
				await this.$axios({
					url:'/user/getAvatar/'+this.myId,
					method:'GET',					
				}).then((res)=>{
					console.log(res.data)
					if(res.code==200){
						uni.setStorageSync('Ava'+this.myId,"data:image/jpeg;base64,"+res.data);
					}
				})
				this.time=Math.round(Math.random()*1000);
			},
			before(){
				// this.$refs.upload.action = this.action;
			},
		},
		onLoad(e) {
			this.src = 'http://106.15.170.74:8082/' + uni.getStorageSync("myInfo").imageUrl;
			this.action = 'http://106.15.170.74:8082/user/uploadAvatar';
			this.uploadData = {userId : 1};
			this.myId = uni.getStorageSync("myInfo").id;
			setTimeout(function() {
				this.flag = false;
			}, 500);
			this.flag = true;
			this.time = Math.round(Math.random()*1000);
		}
	}
</script>

<style>
.myAvatar{
	align-items: center;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 50%;
	/* background-color: #0066CC; */
}
</style>
