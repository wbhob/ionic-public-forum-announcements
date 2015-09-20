angular.module("comments.controllers", ["firebase"])

.controller("PostsCtrl", function($firebaseArray) {
		var vm = this;
		var postsRef = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com/posts/");
		vm.posts = $firebaseArray(postsRef);
		console.log('Instantiated');
		vm.post = function() {
			console.log('Posting');
			console.log(vm.newPost)
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
		var commentsRef = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com/posts/" + $state.params.postId + "/comments");
    vm.comments = $firebaseArray(commentsRef);

    var postRef = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com/posts/" + $state.params.postId);
    vm.post = $firebaseObject(postRef);

		vm.submitComment = function() {
			console.log('Commenting');
			console.log(vm.newComment)
			if (vm.newComment) {
				vm.comments.$add({
					"content": vm.newComment,
					"author": "" //Name; to use a name field, just add a field and ng-model it to vm.name and reference it here.
				});
			}
      vm.newComment = "";
		}
	})
  .controller("AnnouncementsCtrl", function($firebaseArray, $sanitize) {
  		var vm = this;
  		var announceRef = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com/announcements/");
  		vm.announcements = $firebaseArray(announceRef);
  		console.log('Instantiated');
      vm.sanitize = function(string) {
        string.$sanitize();
      }
  	})
    .controller("AnnouncementCtrl", function($firebaseArray, $firebaseObject, $state) {
  		var vm = this;
  		var announcecommentRef = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com/announcements/" + $state.params.announcementId + "/comments");
      vm.comments = $firebaseArray(announcecommentRef);

      var announcementRef = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com/announcements/" + $state.params.announcementId);
      vm.announcement = $firebaseObject(announcementRef);

  		vm.submitComment = function() {
  			console.log('Commenting');
  			console.log(vm.newComment)
  			if (vm.newComment) {
  				vm.comments.$add({
  					"content": vm.newComment,
  					"author": "" //Name; to use a name field, just add a field and ng-model it to vm.name and reference it here.
					});
  			}
        vm.newComment = "";
  		}
  	})
