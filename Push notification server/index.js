var admin = require("firebase-admin");

var serviceAccount = require("F://Push notification server/pushnotification-aa382-firebase-adminsdk-yjd2c-8ad766bfeb.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://pushnotification-aa382.firebaseio.com"
});

var token = "eI-dwok9iPA:APA91bGCE_0D3QRRqECj6C4smiBlmb8DUWfvD9heSAmKcNtGRP7stUabvkLPGZpsssRxDdtdRJ92iqsuvOG75hFVHpF8CvlkEXQfPM-JJGsLB-VVbJwz5x-izYZJCW8kfI6ExXWdDcKH";

var message = {
    data: {
        message: "Hello world"
    },
    notification: {
        title: "hello",
        body: "world"
    }
};

var option = {
    priority: "high",
    timeToLive: 189
};

admin.messaging().sendToDevice(token, message, option)
    .then(res => {
        console.log("SENT");
    })
    .catch(err => {
        console.log("Failed");
    });
