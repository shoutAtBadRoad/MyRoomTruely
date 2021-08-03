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
			v-model="url" action="http://localhost:8082/user/uploadAvatar"></cl-upload>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				myId: '1',
				// src: "http://106.15.170.74:8082/",
				// action: 'http://106.15.170.74:8082/user/uploadAvatar/',
				src: '',
				url: '',
				refresh: "true",
				time: '',
			}
		},
		methods: {
			async imgOnSuccess(){
				await this.axios.request({
					url:'/user/getAvatar/'+this.myId,
					method:'GET',
				}).then((res)=>{
					console.log(res.data)
					if(res.data.code==200){
						uni.setStorageSync('Ava'+this.myId,"data:image/jpeg;base64,"+res.data.data);
					}
				})
				this.time=Math.round(Math.random()*1000);
			},
			before(){
				// this.$refs.upload.action = this.action;
			},
		},
		onLoad(e) {
			this.src = 'http://localhost:8082/' + uni.getStorageSync("myInfo").imageUrl;
			this.myId = uni.getStorageSync("myInfo").id;
			this.time = Math.round(Math.random()*1000);
			// this.action = this.action + this.myId;
			// this.$refs.upload.action = this.action;
			// this.myId = e;
			// this.src = "http://localhost:8082/avatar/ava"+e+".jpeg";
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
