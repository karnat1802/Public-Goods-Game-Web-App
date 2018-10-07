import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Meteor.startup(() => {
  // code to run on server at startup
});



gameinfo = new Mongo.Collection("gameInfo");
gameList = new Mongo.Collection("Game");
