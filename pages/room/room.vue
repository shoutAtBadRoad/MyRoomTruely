<template>
<view>
        <view class="roomFlex">
			<myFlex ref="myFlex" :chatId="chat" :frdId="frd" v-if="flag"></myFlex>
			<inputBox @out="out" @outImg="outImg" :uid='1' @blur="pushKeyBroad()" class="iBox"></inputBox>
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
	.iBox{
		position: absolute;
		bottom: 0%;
	}
}
</style>
