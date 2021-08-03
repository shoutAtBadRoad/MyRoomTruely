<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<navigator url="/pages/room/room" hover-class="navigator-hover">
			<button type="default">进房间</button>
		</navigator>
		<navigator url="/pages/room/myFlex/myFlex" hover-class="navigator-hover">
			<button type="default">进入布局练习</button>
		</navigator>
		<button v-on:click="change">按钮</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			change(){
				this.title = 'World'
				uni.navigateTo({
					url: '/pages/message/message/message?word=helloWorld',
					animationType: 'pop-in',
					animationDuration: 200,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
