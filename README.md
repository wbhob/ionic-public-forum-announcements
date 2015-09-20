ionic-public-forum-announcements
================================

This is a forum/announcements starter you can use. The public forum allows anyone to post for everyone to see. The announcements lets you and any user you create to post, and should be used with the backend I have created.

Setup
------

Setup is easy. Every line where you see `<YOUR-FIREBASE-APP>`, just replace it with the firebase URL prefix. For example, if my firebase url were https://my-app.firebaseio.com, I would change ever instance of `<YOUR-FIREBASE-APP>` to my-app.

Customization
-------------

If you want to use the announcements (no public posting), go into app.js and change line 28 to `$urlRouterProvider.otherwise("/announcements");`. If you want to use public posting, use `$urlRouterProvider.otherwise("/posts");`. Announcements must be used with the dashboard.

Disabling comments is easy. Just go into `templates/announcements.html` or `templates/posts.html`, and remove the `ui-sref=""` on the ion-item tag. 

License
-------

ionic-public-forum-announcements is licensed under the MIT Open Source license.