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
    "endpoint": "https://fcm.googleapis.com/fcm/send/eCyV_Id7VcI:APA91bHufhIKqRyFW2nGGE8cIvLsDhvzzSKQM1zZXPNoa3FXakdO3Zt8l6yZiOp5zEYxxJPwquLPL0L6mVXjNggH_QthBwMVz1ggf1Oohn9M3Ajc8LZnZC7kzMFgjLF_SeC7taiJ_nHP",
    "keys": {
        "p256dh": "BBYFaHjAaO54ukhuiDOyP/1YkLPO/Nr9HEGaIYlD7dWHFYylgRcYA+QT7XuwoVKrlfYWj6bnqAbzm0Dh9GSt0Nw=",
        "auth": "1xdzymKgwnxsUSVzkRFhiw=="
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