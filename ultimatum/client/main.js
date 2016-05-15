import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
import {Session} from 'meteor/session';
import './main.html';






gameinfo = new Mongo.Collection("gameInfo");
gameList = new Mongo.Collection("Game");



gameinfo.allow({
     insert: function(){
         
     }});

  

 

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
Template.question.onCreated(function(){
	this.quizResult = new ReactiveVar(" ");
});
Template.question.helpers({
  quizResult() {
    return Template.instance().quizResult.get();

  },
});

Template.question.events({
	"submit form": function(event,instance,template){
		event.preventDefault();
		var q2= event.target.q2.value;
		var q1=event.target.q1.value;
		if(q1==='a' && q2==='b'){
        return Session.set('successfulAnswer',true);
    }
        if(q1!='a' || q2!='b'){
        	instance.quizResult.set("Incorrect Answer. Try again");
        	console.log(instance.quizResult.get());
        }
	}
	

})

Template.game.events({
  "submit form": function(event, instance) {
    // increment the counter when button is clicked
    
if(instance.checker.get()=='yes')
{
  Session.set('NextRound',true);

}

  // Session.set("nextRound",true);
if(Session.get('NextRound')==true){

    event.preventDefault();
  console.log("Stay next round");
 var player2 = Math.floor(Math.random() * 10);
    var player1 =Number (event.target.EnterContri.value);
    $("#bar").hide();
    instance.yourcontri.set(player1);
    console.log(player1);
    console.log(player2);
   var s = player1+player2;
   console.log(s);
   console.log(Math.floor((s*2)/2)+ 10 - player1);
  var sum= Math.floor((s*2)/2)+ 10 - player1;
  var sum2 = Math.floor((s*2)/2) + 10 - player2;
  instance.calcsum.set(sum);
  instance.calcSum2.set(sum2);
  instance.totalSum2.set(instance.calcSum2.get()+ instance.totalSum2.get());
  instance.oppContri.set(player2);
  instance.totalSum.set(instance.calcsum.get()+ instance.totalSum.get());
  $("#results").val('Next Round');
  if(instance.counter.get()==1){
  gameinfo.insert({                   Player: PlayersList.find({}, {sort: {createdAt: 1}}).fetch().pop() ,
Round: (instance.counter.get()),
                 PlayerContribution: instance.yourcontri.get(),
                 OppositionContribution : instance.oppContri.get(),
                 PlayerTotalPayoff: instance.totalSum.get(),
                 PlayerRoundPayoff: instance.calcsum.get() ,
                
                 user: instance.counter1.get(),
                    });

}

if(instance.counter.get()==2){
  gameinfo.insert({                   Player: PlayersList.find({}, {sort: {createdAt: 1}}).fetch().pop() ,
Round: (instance.counter.get()),
                 PlayerContribution: instance.yourcontri.get(),
                 OppositionContribution : instance.oppContri.get(),
                 PlayerTotalPayoff: instance.totalSum.get(),
                 PlayerRoundPayoff: instance.calcsum.get() ,
                
                 user: instance.counter2.get(),
                    });

}
if(instance.counter.get()==3){
  gameinfo.insert({                   Player: PlayersList.find({}, {sort: {createdAt: 1}}).fetch().pop() ,
Round: (instance.counter.get()),
                 PlayerContribution: instance.yourcontri.get(),
                 OppositionContribution : instance.oppContri.get(),
                 PlayerTotalPayoff: instance.totalSum.get(),
                 PlayerRoundPayoff: instance.calcsum.get() ,
                
                 user: instance.counter3.get(),
                    });

}
if(instance.counter.get()==4){
  gameinfo.insert({                   Player: PlayersList.find({}, {sort: {createdAt: 1}}).fetch().pop() ,
Round: (instance.counter.get()),
                 PlayerContribution: instance.yourcontri.get(),
                 OppositionContribution : instance.oppContri.get(),
                 PlayerTotalPayoff: instance.totalSum.get(),
                 PlayerRoundPayoff: instance.calcsum.get() ,
                
                 user: instance.counter4.get(),
                    });

}
if(instance.counter.get()==5){
  gameinfo.insert({                   Player: PlayersList.find({}, {sort: {createdAt: 1}}).fetch().pop() ,
Round: (instance.counter.get()),
                 PlayerContribution: instance.yourcontri.get(),
                 OppositionContribution : instance.oppContri.get(),
                 PlayerTotalPayoff: instance.totalSum.get(),
                 PlayerRoundPayoff: instance.calcsum.get() ,
                
                 user: instance.counter5.get(),
                    });

}
if(instance.counter.get()==6){
  gameinfo.insert({                   Player: PlayersList.find({}, {sort: {createdAt: 1}}).fetch().pop() ,
 Round: (instance.counter.get()),
                 PlayerContribution: instance.yourcontri.get(),
                 OppositionContribution : instance.oppContri.get(),
                 PlayerTotalPayoff: instance.totalSum.get(),
                 PlayerRoundPayoff: instance.calcsum.get() ,
                
                 user: instance.counter6.get(),
                    });

}
if(instance.counter.get()==7){
  gameinfo.insert({                   Player: PlayersList.find({}, {sort: {createdAt: 1}}).fetch().pop() ,
Round: (instance.counter.get()),
                 PlayerContribution: instance.yourcontri.get(),
                 OppositionContribution : instance.oppContri.get(),
                 PlayerTotalPayoff: instance.totalSum.get(),
                 PlayerRoundPayoff: instance.calcsum.get() ,
                
                 user: instance.counter7.get(),
                    });

}
if(instance.counter.get()==8){
  gameinfo.insert({                   Player: PlayersList.find({}, {sort: {createdAt: 1}}).fetch().pop() ,
Round: (instance.counter.get()),
                 PlayerContribution: instance.yourcontri.get(),
                 OppositionContribution : instance.oppContri.get(),
                 PlayerTotalPayoff: instance.totalSum.get(),
                 PlayerRoundPayoff: instance.calcsum.get() ,
                
                 user: instance.counter8.get(),
                    });

}
if(instance.counter.get()==9){
  gameinfo.insert({                   Player: PlayersList.find({}, {sort: {createdAt: 1}}).fetch().pop() ,
Round: (instance.counter.get()),
                 PlayerContribution: instance.yourcontri.get(),
                 OppositionContribution : instance.oppContri.get(),
                 PlayerTotalPayoff: instance.totalSum.get(),
                 PlayerRoundPayoff: instance.calcsum.get() ,
                
                 user: instance.counter9.get(),
                    });

}
if(instance.counter.get()==10){
  gameinfo.insert({                   Player: PlayersList.find({}, {sort: {createdAt: 1}}).fetch().pop() ,
Round: (instance.counter.get()),
                 PlayerContribution: instance.yourcontri.get(),
                 OppositionContribution : instance.oppContri.get(),
                 PlayerTotalPayoff: instance.totalSum.get(),
                 PlayerRoundPayoff: instance.calcsum.get() ,
                
                 user: instance.counter10.get(),
                    });

}

       
    $('#scoreboard1').css('visibility', 'visible');
    
    $("#scoreboard2").hide();

    var v= (Math.floor(Math.random() * (6000 - 3000 + 1)) + 3000);
  setTimeout(function(){
  $("#scoreboard2").show();

}, v); 
setTimeout(function(){
  $("#scoreboard1").css('visibility','hidden');

}, 3500); 

   if(instance.checker.get()=='yes' && instance.counter.get()==1)
   {
    instance.checker.set('no');
   }


  Session.set('NextRound', false);
}
else{

   console.log("Go to next round");
   instance.counter.set(instance.counter.get() + 1);
   // if (instance.counter.get()==11){
   //   return Session.set("GameOver",true);
   //   return Session.set('NextRound',true);
   //   console.log(Sesstion.get('NextRound'));
   // }
    if (instance.counter.get()==11){
     return Session.set("GameOver",true);

   }
   $("#scoreboard2").hide();

   $("#bar").show()
   
   
  

// $(".scoreboard3").hide();
// $(".scoreboard3").show(2000);

// setTimeout(function(){
// $(".scoreboard3").css("opacity","1");

// $(".scoreboard3").css("display","block");


// }, 3000);
    
    if(instance.counter.get()!=1)
    {
      instance.color1.set("white");
      instance.bcolor1.set("black");
    }
    if(instance.counter.get()!=2)
    {
      instance.color2.set("white");
      instance.bcolor2.set("black");

    }
    if(instance.counter.get()==2)
    {
      instance.color2.set("red");
      instance.bcolor2.set("white");
       
    }
   
    if(instance.counter.get()==3)
    {
      instance.color3.set("red");
      instance.bcolor3.set("white");
        
    }
    if(instance.counter.get()!=3)
    {
      instance.color3.set("white");
      instance.bcolor3.set("black");
    }
    if(instance.counter.get()==4)
    {
      instance.color4.set("red");
      instance.bcolor4.set("white");
    }
    if(instance.counter.get()!=4)
    {
      instance.color4.set("white");
      instance.bcolor4.set("black");
    }
    if(instance.counter.get()==5)
    {
      instance.color5.set("red");
      instance.bcolor5.set("white");
    }
    if(instance.counter.get()!=5)
    {
      instance.color5.set("white");
      instance.bcolor5.set("black");
    }
    if(instance.counter.get()==6)
    {
      instance.color6.set("red");
      instance.bcolor6.set("white");

    }
    if(instance.counter.get()!=6)
    {
      instance.color6.set("white");
      instance.bcolor6.set("black");
    }
    if(instance.counter.get()==7)
    {
      instance.color7.set("red");
      instance.bcolor7.set("white");
    }
     if(instance.counter.get()!=7)
    {
      instance.color7.set("white");
      instance.bcolor7.set("black");
    }
    if(instance.counter.get()==8)
    {
      instance.color8.set("red");
      instance.bcolor8.set("white");
    }
     if(instance.counter.get()!=8)
    {
      instance.color8.set("white");
      instance.bcolor8.set("black");
    }
    if(instance.counter.get()==9)
    {
      instance.color9.set("red");
      instance.bcolor9.set("white");
    }
    if(instance.counter.get()!=9)
    {
      instance.color9.set("white");
      instance.bcolor9.set("black");
    }
    if(instance.counter.get()==10)
    {
      instance.color10.set("red");
      instance.bcolor10.set("white");
    }
    if(instance.counter.get()!=10)
    {
      instance.color10.set("white");
      instance.bcolor10.set("black");
    }
    if(instance.counter.get()==11)
    {
      instance.color11.set("red");
    }
    if(instance.counter.get()!=11)
    {
      instance.color11.set("white");
    }
$("#results").val('Play this Round');

    $(".scoreboard3").hide();
$(".scoreboard3").show(2000);

     event.target.EnterContri.value="";



    
   Session.set('NextRound',true);
}

  
  
  
    
  console.log("Your earnings for this round:")

// $("#scoreboard2").css("opacity","0");
// $("#scoreboard2").css("display","none");

// setTimeout(function(){
// $("#scoreboard2").css("opacity","1");

// $("#scoreboard2").css("display","block");


// }, 1000);




  
  
// gameinfo.insert({ Round: (instance.counter.get()-1),
//  	               PlayerContribution: instance.yourcontri.get(),
//  	               OppositionContribution : instance.oppContri.get(),
//  	               PlayerTotalPayoff: instance.totalSum.get(),
//  	               PlayerRoundPayoff: instance.calcsum.get() ,
//                  Player: PlayersList.find({}, {sort: {createdAt: 1}}).fetch().pop() ,
//                  user: oppList.find({}, {sort: {createdAt: 1}}).fetch().pop()
//                     });
// if(instance.counter.get()==2){
//   gameinfo.insert({                   Player: PlayersList.find({}, {sort: {createdAt: 1}}).fetch().pop() ,
// Round: (instance.counter.get()-1),
//                  PlayerContribution: instance.yourcontri.get(),
//                  OppositionContribution : instance.oppContri.get(),
//                  PlayerTotalPayoff: instance.totalSum.get(),
//                  PlayerRoundPayoff: instance.calcsum.get() ,
                
//                  user: instance.counter1.get(),
//                     });

// }

// if(instance.counter.get()==3){
//   gameinfo.insert({                   Player: PlayersList.find({}, {sort: {createdAt: 1}}).fetch().pop() ,
// Round: (instance.counter.get()-1),
//                  PlayerContribution: instance.yourcontri.get(),
//                  OppositionContribution : instance.oppContri.get(),
//                  PlayerTotalPayoff: instance.totalSum.get(),
//                  PlayerRoundPayoff: instance.calcsum.get() ,
                
//                  user: instance.counter2.get(),
//                     });

// }
// if(instance.counter.get()==4){
//   gameinfo.insert({                   Player: PlayersList.find({}, {sort: {createdAt: 1}}).fetch().pop() ,
// Round: (instance.counter.get()-1),
//                  PlayerContribution: instance.yourcontri.get(),
//                  OppositionContribution : instance.oppContri.get(),
//                  PlayerTotalPayoff: instance.totalSum.get(),
//                  PlayerRoundPayoff: instance.calcsum.get() ,
                
//                  user: instance.counter3.get(),
//                     });

// }
// if(instance.counter.get()==5){
//   gameinfo.insert({                   Player: PlayersList.find({}, {sort: {createdAt: 1}}).fetch().pop() ,
// Round: (instance.counter.get()-1),
//                  PlayerContribution: instance.yourcontri.get(),
//                  OppositionContribution : instance.oppContri.get(),
//                  PlayerTotalPayoff: instance.totalSum.get(),
//                  PlayerRoundPayoff: instance.calcsum.get() ,
                
//                  user: instance.counter4.get(),
//                     });

// }
// if(instance.counter.get()==6){
//   gameinfo.insert({                   Player: PlayersList.find({}, {sort: {createdAt: 1}}).fetch().pop() ,
// Round: (instance.counter.get()-1),
//                  PlayerContribution: instance.yourcontri.get(),
//                  OppositionContribution : instance.oppContri.get(),
//                  PlayerTotalPayoff: instance.totalSum.get(),
//                  PlayerRoundPayoff: instance.calcsum.get() ,
                
//                  user: instance.counter5.get(),
//                     });

// }
// if(instance.counter.get()==7){
//   gameinfo.insert({                   Player: PlayersList.find({}, {sort: {createdAt: 1}}).fetch().pop() ,
//  Round: (instance.counter.get()-1),
//                  PlayerContribution: instance.yourcontri.get(),
//                  OppositionContribution : instance.oppContri.get(),
//                  PlayerTotalPayoff: instance.totalSum.get(),
//                  PlayerRoundPayoff: instance.calcsum.get() ,
                
//                  user: instance.counter6.get(),
//                     });

// }
// if(instance.counter.get()==8){
//   gameinfo.insert({                   Player: PlayersList.find({}, {sort: {createdAt: 1}}).fetch().pop() ,
// Round: (instance.counter.get()-1),
//                  PlayerContribution: instance.yourcontri.get(),
//                  OppositionContribution : instance.oppContri.get(),
//                  PlayerTotalPayoff: instance.totalSum.get(),
//                  PlayerRoundPayoff: instance.calcsum.get() ,
                
//                  user: instance.counter7.get(),
//                     });

// }
// if(instance.counter.get()==9){
//   gameinfo.insert({                   Player: PlayersList.find({}, {sort: {createdAt: 1}}).fetch().pop() ,
// Round: (instance.counter.get()-1),
//                  PlayerContribution: instance.yourcontri.get(),
//                  OppositionContribution : instance.oppContri.get(),
//                  PlayerTotalPayoff: instance.totalSum.get(),
//                  PlayerRoundPayoff: instance.calcsum.get() ,
                
//                  user: instance.counter8.get(),
//                     });

// }
// if(instance.counter.get()==10){
//   gameinfo.insert({                   Player: PlayersList.find({}, {sort: {createdAt: 1}}).fetch().pop() ,
// Round: (instance.counter.get()-1),
//                  PlayerContribution: instance.yourcontri.get(),
//                  OppositionContribution : instance.oppContri.get(),
//                  PlayerTotalPayoff: instance.totalSum.get(),
//                  PlayerRoundPayoff: instance.calcsum.get() ,
                
//                  user: instance.counter9.get(),
//                     });

// }
// if(instance.counter.get()==11){
//   gameinfo.insert({                   Player: PlayersList.find({}, {sort: {createdAt: 1}}).fetch().pop() ,
// Round: (instance.counter.get()-1),
//                  PlayerContribution: instance.yourcontri.get(),
//                  OppositionContribution : instance.oppContri.get(),
//                  PlayerTotalPayoff: instance.totalSum.get(),
//                  PlayerRoundPayoff: instance.calcsum.get() ,
                
//                  user: instance.counter10.get(),
//                     });

// }








// var v= (Math.floor(Math.random() * (10000 - 4000 + 1)) + 4000);
// console.log(v);

 

   // $("#scoreboard2").hide();
   
   // $("#scoreboard2").show(4000);
   
// $(".scoreboard3").css("opacity","0");
// $(".scoreboard3").css("display","none");

// setTimeout(function(){
// $(".scoreboard3").css("opacity","1");


// $(".scoreboard3").css("display","block");


// }, (v+500));



},
  
  

});

Template.game.created=function(){

   return Session.set("NextRound",true);

}

Template.game.onCreated(function() {
  // counter starts at 0
  this.counter = new ReactiveVar(1);
  this.calcsum = new ReactiveVar(0);
  this.oppContri = new ReactiveVar(0);
  this.totalSum = new ReactiveVar(0);
  this.totalSum2 = new ReactiveVar(0);
  this.calcSum2 = new ReactiveVar(0);
  this.yourcontri = new ReactiveVar(0);
 
  this.counter1 = new ReactiveVar(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  this.counter2 = new ReactiveVar(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  this.counter3 = new ReactiveVar(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  this.counter4 = new ReactiveVar(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  this.counter5 = new ReactiveVar(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  this.counter6 = new ReactiveVar(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  this.counter7 = new ReactiveVar(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  this.counter8 = new ReactiveVar(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  this.counter9 = new ReactiveVar(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  this.counter10 = new ReactiveVar(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  this.color1= new ReactiveVar("red");
  this.color2= new ReactiveVar("white");
  this.color3= new ReactiveVar("white");
  this.color4= new ReactiveVar("white");
  this.color5= new ReactiveVar("white");
  this.color6= new ReactiveVar("white");
  this.color7= new ReactiveVar("white");
  this.color8= new ReactiveVar("white");
  this.color9= new ReactiveVar("white");
  this.color10= new ReactiveVar("white");
  this.color11= new ReactiveVar("white");
  this.bcolor1= new ReactiveVar("white");
  this.bcolor2= new ReactiveVar("black");
  this.bcolor3= new ReactiveVar("black");
  this.bcolor4= new ReactiveVar("black");
  this.bcolor5= new ReactiveVar("black");
  this.bcolor6= new ReactiveVar("black");
  this.bcolor7= new ReactiveVar("black");
  this.bcolor8= new ReactiveVar("black");
  this.bcolor9= new ReactiveVar("black");
  this.bcolor10= new ReactiveVar("black");
  this.bcolor11= new ReactiveVar("black");
  this.checker= new ReactiveVar('yes');

 
});


Template.game.helpers({
  counter() {
    return Template.instance().counter.get();

  },
   counter1() {
    return Template.instance().counter1.get();

  },
  counter2() {
    return Template.instance().counter2.get();

  },
  counter3() {
    return Template.instance().counter3.get();

  },
  counter4() {
    return Template.instance().counter4.get();

  },
  counter5() {
    return Template.instance().counter5.get();

  },
  counter6() {
    return Template.instance().counter6.get();

  },
  counter7() {
    return Template.instance().counter7.get();

  },
  counter8() {
    return Template.instance().counter8.get();

  },
  counter9() {
    return Template.instance().counter9.get();

  },
  counter10() {
    return Template.instance().counter10.get();

  },
  calcsum(){
  	return Template.instance().calcsum.get();
  },
  oppContri(){
  	return Template.instance().oppContri.get();
  },
  totalSum(){
  	return Template.instance().totalSum.get();
  },  
  calcSum2(){
  	return Template.instance().calcSum2.get();
  },
  totalSum2(){
  	return Template.instance().totalSum2.get();
  },
  yourcontri(){
  	return Template.instance().yourcontri.get();
  },
  
  color1(){
  	return Template.instance().color1.get();
  },
  color2(){
  	return Template.instance().color2.get();
  },
  color3(){
  	return Template.instance().color3.get();
  },
  color4(){
  	return Template.instance().color4.get();
  },
  color5(){
  	return Template.instance().color5.get();
  },
  color6(){
  	return Template.instance().color6.get();
  },
  color7(){
  	return Template.instance().color7.get();
  },
  color8(){
  	return Template.instance().color8.get();
  },
  color9(){
  	return Template.instance().color9.get();
  },
  color10(){
  	return Template.instance().color10.get();
  },
  color11(){
  	return Template.instance().color11.get();
  },
  bcolor1(){
  	return Template.instance().bcolor1.get();
  },
  bcolor2(){
  	return Template.instance().bcolor2.get();
  },
  bcolor3(){
  	return Template.instance().bcolor3.get();
  },
  bcolor4(){
  	return Template.instance().bcolor4.get();
  },
  bcolor5(){
  	return Template.instance().bcolor5.get();
  },
  bcolor6(){
  	return Template.instance().bcolor6.get();
  },
  bcolor7(){
  	return Template.instance().bcolor7.get();
  },
  bcolor8(){
  	return Template.instance().bcolor8.get();
  },
  bcolor9(){
  	return Template.instance().bcolor9.get();
  },
  bcolor10(){
  	return Template.instance().bcolor10.get();
  },
  bcolor11(){
  	return Template.instance().bcolor11.get();
  },
});


Template.game.created=function(){
	return Session.set("GameOver",false);
}
Template.game.helpers({
	isGameOver: function(){
		return Session.get('GameOver');
	}
})

Template.gameover.created=function(){
	return Session.set("PlayAgain", false );
}
Template.gameover.helpers({
	isPlayAgain: function(){
		return Session.get("PlayAgain");
	}
})

Template.gameover.events({
	"click .make": function(){
		return Session.set('PlayAgain', true);
	}
})
