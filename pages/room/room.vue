<template>
<view>
        <view class="roomFlex">
			<view class="logBox" ref="logBox">
				<myFlex style="width: 100%; height: 100%;" ref="myFlex" :chatId="chat" :frdId="frd" v-if="flag"></myFlex>
			</view>
			<view class="botBox">
				<inputBox @out="out" @outImg="outImg" @pop="pop" :uid='1' @blur="pushKeyBroad()"></inputBox>
			</view>
        </view>
</view>
</template>

<script>
	import myFlex from './myFlex/myFlex'
	import inputBox from './inputBox/inputBox'
    export default {
        data() {
            return {
				hackReset: true,
				id: '',
				item: [],
				chat:'',
				frd:'',
				flag: false,
            }
        },
        methods: {
			toBottom(){
				this.$refs.myFlex.gotoBottom();
				console.log("bot")
			},
			async pop(e){
				await this.$refs.myFlex.chg(e);
			},
			async outImg(e){
			   await this.$refs.myFlex.getImgList(e);
				// console.log(this.ava);
			},
			pushKeyBroad(){
				uni.showKeyboard();
			},
			async out(e){
				const i = uni.getStorageSync('user');
				// console.log(i);
				await this.$refs.myFlex.getSrcList(e,i); 
			},
        },
		created:function(){
		},
		mounted() {
			this.flag = false;
			console.log(this.chat);
			console.log(this.frd);
			this.$nextTick(() => {
			       this.flag = true;
			  })
		},
		onLoad(option) {
			this.chat = option.chatId;
			this.frd = option.frdId;
			this.flag=false;
			// console.log(option.chatId);
			// this.$refs.myFlex.connectSocketInit();
		},
		components:{myFlex,inputBox},
    }
</script>

<style lang="less">
.roomFlex{
	display: flex;
	flex-direction: column;
	margin: 0rpx;
}
.logBox{
	// overflow:hidden;
	position: relative;
	// background-color: #55ffff;
	height: 85vh;
	width: 100vw;
}
.botBox{
	// background-color: #409EFF;
	position: fixed;
	bottom: 0%;
}
</style>
