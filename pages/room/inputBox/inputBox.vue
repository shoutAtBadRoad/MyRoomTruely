<template>
	<view>
		<form @submit="formSubmit">
			<view  class="rowBox">
				<cl-input @blur="pushKeyBroad" 
				:adjust-position="true" type="text" 
				class="inputArea" v-model="input"
				:round="true" :border="true">
				</cl-input>
				<cl-button class="inputBtn" form-type="submit"
				:round="true"
				
				>send</cl-button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		props: ['uid'],
		data() {
			return {
				input: '',
			}
		},
		methods: {
			pushKeyBroad(){
				uni.hideKeyboard();
			},
			formSubmit(){
				this.$emit("out",this.input);
				// console.log("msg is" + this.input);
				this.input='';
			},
		}
	}
</script>

<style>
	.rowBox{
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		background-color: #C8C7CC;
		width: 100vw;
		height: 7.5vh;
	}
	.inputArea{
		margin: 5px;
		/* padding: 10px; */
/* 		border-radius: 10px;
		border: #8F8F94;
		-moz-box-shadow:0 0 10px #06c;
		-webkit-box-shadow:0 0 10px #06c;
		 box-shadow:0 0 10px #06c; */
		width: 75vw;
		height: 6vh;
		padding: 1rpx;
		background-color: white;
	}
	.inputBtn{
		margin: 5px;
		margin-top: 17rpx;
		width: 20vw;
/* 		border: #8F8F94;
		-moz-box-shadow:0 0 10px #55557f;
		-webkit-box-shadow:0 0 10px #06c;
		box-shadow:0 0 10px #06c; */
		/* border-style: groove; */
	}
</style>
