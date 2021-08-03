import Vue from 'vue'
import App from './App'
import Request from './js_sdk/pocky-request/pocky-request v.2.0.4/index.js'
import ClUni from "cl-uni";

Vue.use(ClUni, {
	// 进入业务单页时，页面栈只有一个，自定义导航左侧返回按钮跳转的路径
	homePage: "/"
});

// import ElementUI from 'element-ui'

// Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.axios = Request();



App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
