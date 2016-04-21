PlayersList = new Mongo.Collection("players");

PlayersList.allow({
     insert: function(){
         
     }
});
PlayersListSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    
  },
  age: {
    type: Number,
    label: "Age"
  },
  country: {
    type: String,
    label: "Country of Origin",
    
  },
  race: {
    type: String,
    label: "Ethnicity",
    
  },
  income: {
    type: Number,
    label: "Income",
    
  },
  education: {
    type: String,
    label: "Education Level",
    
  },

  
});

PlayersList.attachSchema(PlayersListSchema)

