<template>
	<view>
		<form @submit="formSubmit">
		<view class="loginBox">
			<!-- <cl-loading theme="spin"> -->
			<cl-input v-model="username" type="text" 
				prefix-icon="cl-icon-my"
				:round="true"
				placeholder="用户名"
			/>
			<cl-input v-model="password" 
				type="password"
				:password="true"
				prefix-icon="cl-icon-eye-close"
				:round="true"
				placeholder="密    码"
			 />
			 <!-- </cl-loading> -->
			<cl-button form-type="submit"
				:round="true"
				type="primary "
			>登录</cl-button>
		</view>
		</form>
		<cl-message ref="success"></cl-message>
		<cl-message ref="fail"></cl-message>
		<cl-message ref="test"></cl-message>
	</view>
</template>

<script>
	import clMessage from 'cl-uni/components/cl-message/cl-message.vue';
	export default {
		data() {
			return {
				username:'',
				password:'',
			}
		},
		methods: {
			async formSubmit(){
				var that = this;
				var p = {
					userName:this.username,
					passWord:this.password,
				};
				
				if(this.username=='' || this.password==''){
					this.$refs.test.open({
						message: "请输入用户名和密码！",
						type: "warning",
					});
					return;
				}
				
				uni.request({
					method:'POST',//请求方式  或GET，必须为大写
					url:'/web/user/login',
					data:{
						userName: p.userName,
						passWord: p.passWord,						
					},
					withCredentials:true,
                    xhrFields: {
                         withCredentials: true
                    },
					success: (data) => {
						console.log(data.data)
						var data = data.data;
						if(data.code==200){
							uni.setStorageSync('user',data.data);
							that.getMyAva(data.data);
							uni.switchTab({
								url:'../frdList/frdList'
							})
							that.$refs.success.open({
							  message: "登陆成功",
							  type: "success",
							});
						}else{
							that.$refs.fail.open({
									  message: "登陆失败",
									  type: "error",
									});
						}
					}
				})
				
			},
			async getMyAva(e){
				await this.$axios({
					url:'/user/getAvatar/'+e,
					method:"GET"
				}).then((res)=>{
					uni.setStorageSync("Ava"+e,"data:image/jpeg;base64,"+res.data);
				})
			},
		},
		components:{clMessage}
	}
</script>

<style>
.loginBox{
	display: flex;
	flex-direction: column;
	width: 100vw;
	/* background-image: url(../../static/cat.jpeg); */
	/* background-color: #3F536E; */
}
.ibox{
	display: flex;
	flex-direction: row;
	margin-left: 2vw;
}
</style>
