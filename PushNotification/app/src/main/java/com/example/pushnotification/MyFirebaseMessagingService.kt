package com.example.pushnotification

import android.util.Log
import com.google.firebase.messaging.FirebaseMessagingService
import com.google.firebase.messaging.RemoteMessage

class MyFirebaseMessagingService : FirebaseMessagingService() {

    override fun onMessageReceived(p0: RemoteMessage) {
        super.onMessageReceived(p0)

        if(p0.notification != null){
            Log.d("FIRE_BASE"," Notification : " + p0.notification!!.body.toString())
        }

    }

    override fun onNewToken(token: String) {
        super.onNewToken(token)
        Log.d("FIRE_BASE", "Refreshed token: $token")

        // If you want to send messages to this application instance or
        // manage this apps subscriptions on the server side, send the
        // Instance ID token to your app server.


        // sendRegistrationToServer(token)
    }
}