var firebase = require("firebase");

var firebaseConfig = {
    apiKey: "AIzaSyAD9EUDRL98Hlhmzp9XAcWJYeg_m0qPRos",
    authDomain: "test-push-vue-8919a.firebaseapp.com",
    projectId: "test-push-vue-8919a",
    storageBucket: "test-push-vue-8919a.appspot.com",
    messagingSenderId: "96622481420",
    appId: "1:96622481420:web:cc2b7d0bdf6f80a36ede29",
    measurementId: "G-GZSZ6XW38H"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

module.exports = {
    requestPermission: function () {
        messaging.requestPermission()
            .then(function () {
                console.log("request permission: true");
                return messaging.getToken();
            })
            .then(function (token) {
                console.log(token);
            })
            .catch(function (err) {
                console.log("request permission: false " + err);
            })
    },
    onMessage: function () {
        messaging.onMessage(function (payload) {
            console.log("onMessage" + payload);
        })
    },
    debug: function () {
        console.log(firebase);
    }
}