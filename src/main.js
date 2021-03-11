import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/app.scss'
import VueApexCharts from 'vue-apexcharts'

Vue.component('apexchart', VueApexCharts)

import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)

Vue.config.productionTip = false

import LoadScript from "vue-plugin-load-script";

Vue.use(LoadScript);

// import firebase from "firebase/app";
// import "firebase/messaging";
//
// var config = {
//     apiKey: "AIzaSyAD9EUDRL98Hlhmzp9XAcWJYeg_m0qPRos",
//     authDomain: "test-push-vue-8919a.firebaseapp.com",
//     projectId: "test-push-vue-8919a",
//     storageBucket: "test-push-vue-8919a.appspot.com",
//     messagingSenderId: "96622481420",
//     appId: "1:96622481420:web:cc2b7d0bdf6f80a36ede29",
//     measurementId: "G-GZSZ6XW38H"
// };
// firebase.initializeApp(config);
//
// const messaging = firebase.messaging();
// //Include vapid keys as its recommended for web push
// messaging.getToken({vapidKey: "BLyBLwc2kgXIpsL-Q1c4bq_JequrOvSBybkEPPllFkhY_sXYv5WZU0G3ZSwYp8QOkqI8DMBtBkivxo0tpEpcETE"})
//
// messaging
//     .getToken()
//     .then(function (currentToken) {
//         console.log(currentToken);
//     })
//     .catch(function (err) {
//         console.log("An error occurred while retrieving token. ", err);
//     });
//
// if ('Notification' in window) {
//     messaging.onMessage(function(payload) {
//         console.log('Message received. ', payload);
//         new Notification(payload.notification.title, payload.notification);
//     });
// }
//
//Vue.use(firebase);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
