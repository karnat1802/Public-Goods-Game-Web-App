import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';


onYouTubeIframeAPIReady = function () {

        // New Video Player, the first argument is the id of the div.
        // Make sure it's a global variable.
        player = new YT.Player("player", {

            height: "400", 
            width: "500", 

            // videoId is the "v" in URL (ex: http://www.youtube.com/watch?v=LdH1hSWGFGU, videoId = "LdH1hSWGFGU")
            videoId: "4HhBJxUrb98", 

            // Events like ready, state change, 
            events: {

                onReady: function (event) {

                    // Play video when player ready.
                    event.target.playVideo();
                }

            }

        });

    };

    YT.load();


AutoForm.addHooks('insertList',{
   onSuccess:function(){
   	console.log("successful Entry")
   	return Session.set('successfulEntry',true)
   	
   }

}) 

Template.play.helpers({
	isSuccessfulEntry: function () {
		return Session.get('successfulEntry');
	}
});


Template.play.created = function () {
	return Session.set('successEntry', false);
};

Template.play.rendered = function () {
};

Template.play.destroyed = function () {
	return Session.set('successfulEntry', false);
};


