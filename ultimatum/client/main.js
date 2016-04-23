import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
import {Session} from 'meteor/session';


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

/*****************************************************************************/
/* Rsvp: Lifecycle Hooks */
/*****************************************************************************/
Template.play.created = function () {
	return Session.set('successEntry', false);
};

Template.play.rendered = function () {
};

Template.play.destroyed = function () {
	return Session.set('successfulEntry', false);
};


Template.instruction.created= function(){
	return Session.set('successfulInstruction',false);
};

Template.instruction.helpers({
	isSuccessful: function(){
		return Session.get('successfulInstruction');
	}
});
Template.instruction.events({
	"click .but": function(){
		return Session.set('successfulInstruction', true);
	}
})

Template.question.created=function(){
	return Session.set("successfulAnswer",false);
}
Template.question.helpers({
	isSuccessfulAnswer: function(){
		return Session.get('successfulAnswer');
	}
})

Template.question.events({
	"click .quiz": function(){
		return Session.set('successfulAnswer',true);
	}
})


