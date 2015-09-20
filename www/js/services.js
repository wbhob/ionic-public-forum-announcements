angular.module("comments.services", [])

.service("Posts", function($firebaseArray) {

	this.all = function() {
		var postsRef = new Firebase("https://lovett-test.firebaseio.com/posts");
		return $firebaseArray(postsRef);
	}
})
