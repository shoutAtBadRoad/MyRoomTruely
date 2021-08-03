<template>
	<view>
		<div>{{this.msg}}</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg : ''
			}
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.word); //打印出上个页面传递的参数。
			this.msg = option.word;
			// console.log(option.name); //打印出上个页面传递的参数。
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
