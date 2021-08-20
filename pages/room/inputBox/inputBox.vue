<template>
	<view>
		<form @submit="formSubmit">
			<view  class="rowBox">
				<cl-input @blur="pushKeyBroad" 
				:adjust-position="true" type="text" 
				class="inputArea" v-model="input"
				 :border="true">
				</cl-input>
				<image src="../../../static/icon/新增.png" class="popIcon" @click="popup()"></image>
				<cl-button class="inputBtn" form-type="submit">send</cl-button>
				<uni-popup ref="popup" type="bottom">
					<view class="abilities">
						<image @click="choose()" src="../../../static/icon/拍照.png" style="width: 100rpx; height: 100rpx; margin: 33rpx;"></image>
					</view>
				
				</uni-popup>
			</view>

		</form>
	</view>
</template>

<script>
	import uniPopup from '../../../uni_modules/uni-popup/components/uni-popup/uni-popup.vue'
	export default {
		props: ['uid'],
		
		data() {
			return {
				input: '',
			}
		},
		methods: {
			choose(){
				var that = this;
				uni.chooseImage({
				    count: 6, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
				        this.src = res.tempFiles[0];
						var reader = new FileReader()
						reader.onloadend = function() {
							// console.log('b4', reader.result)
							that.$emit("outImg",reader.result);
						}
						if (this.src) {
						 reader.readAsDataURL(this.src)
						}
				
				    }
				});
			},
			popup(){
				this.$refs.popup.open('bottom');
			},
			pushKeyBroad(){
				uni.hideKeyboard();
			},
			formSubmit(){
				this.$emit("out",this.input);
				// console.log("msg is" + this.input);
				this.input='';
			},
		},
		comments:{uniPopup}
	}
</script>

<style>
	.popIcon{
		margin-top: 16rpx;
		width: 10%;
		height: 5vh;
		
	}
	.abilities{
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		margin: 10rpx;
		background-color: #DCDFE6;
		border-color: #808080;
		padding: 15rpx;
	}
	.rowBox{
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		/* background-color: #C8C7CC; */
		width: 100vw;
		height: 7.5vh;
		position: fixed;
		bottom: 0rpx;
		-webkit-box-shadow:0 0 2px;
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
		-webkit-box-shadow:0 0 2px;
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
		-webkit-box-shadow:0 0 2px;
	}
</style>
