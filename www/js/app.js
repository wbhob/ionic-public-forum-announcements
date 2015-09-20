// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('comments', ['ionic', "firebase", "comments.controllers", "comments.services"])
	.config(function($urlRouterProvider, $stateProvider) {
		$stateProvider.state("posts", {
				url: "/posts",
				templateUrl: "templates/posts.html",
				controller: "PostsCtrl as posts"
			})
			.state("post", {
				url: "/posts/:postId",
				templateUrl: "templates/post.html",
				controller: "PostCtrl as post"
			})
			.state("announcements", {
				url: "/announcements",
				templateUrl: "templates/announcements.html",
				controller: "AnnouncementsCtrl as announcement"
			})
      .state("announcement", {
				url: "/announcements/:announcementId",
				templateUrl: "templates/announcement.html",
				controller: "AnnouncementCtrl as announce"
			});
		$urlRouterProvider.otherwise("/announcements");
	})

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})
