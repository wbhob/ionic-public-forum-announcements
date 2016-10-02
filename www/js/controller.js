angular.module("comments.controllers", ["firebase"])

.controller("PostsCtrl", function($firebaseArray) {
		var vm = this;
		var postsRef = firebase.database().ref("posts");
		vm.posts = $firebaseArray(postsRef);
		console.log('Instantiated');
		vm.post = function() {
			if (vm.newPost) {
				vm.posts.$add({
					"content": vm.newPost,
					"author": "" //Name; to use a name field, just add a field and ng-model it to vm.name and reference it here.
				});
			}

      vm.newPost = "";
		};
	})
	.controller("PostCtrl", function($firebaseArray, $firebaseObject, $state) {
		var vm = this;
		var commentsRef = firebase.database().ref("posts/" + $state.params.postId + "/comments");
    vm.comments = $firebaseArray(commentsRef);

    var postRef = firebase.database().ref("posts/" + $state.params.postId);
    vm.post = $firebaseObject(postRef);

		vm.submitComment = function() {
			if (vm.newComment) {
				vm.comments.$add({
					"content": vm.newComment,
					"author": "" //Name; to use a name field, just add a field and ng-model it to vm.name and reference it here.
				});
			}
      vm.newComment = "";
		};
	})
  .controller("AnnouncementsCtrl", function($firebaseArray, $sanitize) {
  		var vm = this;
  		var announceRef = firebase.database().ref("announcements/");
  		vm.announcements = $firebaseArray(announceRef);
      vm.sanitize = function(string) {
        string.$sanitize();
      };
  	})
    .controller("AnnouncementCtrl", function($firebaseArray, $firebaseObject, $state) {
  		var vm = this;
  		var announcecommentRef = firebase.database().ref("announcements/" + $state.params.announcementId + "/comments");
      vm.comments = $firebaseArray(announcecommentRef);

      var announcementRef = firebase.database().ref("announcements/" + $state.params.announcementId);
      vm.announcement = $firebaseObject(announcementRef);

  		vm.submitComment = function() {
  			if (vm.newComment) {
  				vm.comments.$add({
  					"content": vm.newComment,
  					"author": "" //Name; to use a name field, just add a field and ng-model it to vm.name and reference it here.
					});
  			}
        vm.newComment = "";
  		}
  	})
