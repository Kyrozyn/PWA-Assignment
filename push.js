var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BF5RnauVwSHQgAkuk0s-m3_J57RZUrXXBPWh14fPqAdbOM1wj1J8qqU1CJINjdG1mClgHamGYia_oCfvIwp-k5E",
    "privateKey": "dmFBLtvw3ciIJdnbDsNguoYJCbO2jOvCMpFGZqMk3t0"
};


webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/eMFYKtseztI:APA91bEw1kp3eH-9nl7br0tMxLEJldyNuqYgl0FEa63YBxUs4MRJHZohPKP-C1EcJ25F7oUF60ZpVjgA7FCE0leUxg5MW2XWJLk-iZ-oNUGTLiYGqmTJQdCanM4SY2PgyDqrGawu_omS",
    "keys": {
        "p256dh": "BMBqLFbGmtWb+uMvA5jrrK4dRcTstwQDPo0dtXX9+bKgGu6yB/MEveyM+JLee2wlq0JDa326BlLy8+9JFJDNM/4=",
        "auth": "PV6zhv2axC5lFPMRuU+pUA=="
    }
};
var payload = 'Hai!!! Push ini dari GCM';

var options = {
    gcmAPIKey: '1039163783000',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);