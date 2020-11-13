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
    "endpoint": "https://fcm.googleapis.com/fcm/send/f1cFXXc2dzY:APA91bGcj7TFMIkJ2UmFOWlrxkHM4_mmziZobD-rsGWxW0KQ9A8JM3YQebUGbHLGNHvOu-yLXXEkqrFak1vAhSPuiNAisjFb892GAxOdC9oHWmtGz5K1P9y4UyimGtTGGPGEU-UfRFdV",
    "keys": {
        "p256dh": "BDHf5jpE2T/CAKw1wpj4lxAF2qmyRrhISr3VC0oE+6SR5mxiTqQejCyr2gNoS3+9fCNB6LIduxZVQ5fT757XsC4=",
        "auth": "UDpi3JVilDR3zmf3Oxhcow=="
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