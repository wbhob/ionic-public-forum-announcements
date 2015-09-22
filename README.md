ionic-public-forum-announcements
================================

This is a forum/announcements starter you can use. The public forum allows anyone to post for everyone to see. The announcements lets you and any user you create to post, and should be used with the backend I have created.

Setup
------

Setup is easy. First, make sure you have ionic and cordova installed. Just run `npm install -g ionic cordova` or `sudo npm install -g ionic cordova`.

Every line where you see `<YOUR-FIREBASE-APP>`, just replace it with the firebase URL prefix. For example, if my firebase url were https://my-app.firebaseio.com, I would change ever instance of `<YOUR-FIREBASE-APP>` to my-app.

Now, if you haven't already, install ios-sim (`npm install ios-sim -g`) or <a href="http://developer.android.com/sdk/index.html#Other">"android emulator</a>.
To test your app, run `ionic emulate [ios][android]`, depending on your target platform. Note: iOS will not emulate on Windows or Linux, as the iOS simulator is only available on Mac OS.

Customization
-------------

If you want to use the announcements (no public posting), go into app.js and change line 28 to `$urlRouterProvider.otherwise("/announcements");`. If you want to use public posting, use `$urlRouterProvider.otherwise("/posts");`. Announcements must be used with the <a href="https://github.com/wilsonhobbs/ionic-public-forum-announcements-dashboard">dashboard</a>.

Disabling comments is easy. Just go into `templates/announcements.html` or `templates/posts.html`, and remove the `ui-sref=""` on the ion-item tag. 

License
-------

ionic-public-forum-announcements is licensed under the MIT Open Source license.