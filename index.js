
var checkRemotePermission = function (permissionData) {
    if (permissionData.permission === 'default') {
        // This is a new web service URL and its validity is unknown.
        window.safari.pushNotification.requestPermission(
            'https://test.lentainform.com', // The web service URL.
            'web.denyhf.github.io',     // The Website Push ID.
            {}, // Data that you choose to send to your server to help you identify the user.
            checkRemotePermission         // The callback function.
        );
    }
    else if (permissionData.permission === 'denied') {
            console.war('User not allowed notifications');
    }
    else if (permissionData.permission === 'granted') {
        // The web service URL is a valid push provider, and the user said yes.
        // permissionData.deviceToken is now available to use.
        console.log(permissionData.deviceToken, 'YEAH!');
    }
};

if ('safari' in window && 'pushNotification' in window.safari) {
    var permissionData = window.safari.pushNotification.permission('web.com.example.domain');
    checkRemotePermission(permissionData);
}else {
//FIREBASE HERE
}
