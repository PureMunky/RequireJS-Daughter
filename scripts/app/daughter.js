// Daughter
define(['./livingroom'], function (livingroom) {
  console.log('-- daughter.js -- ');

  var x = 57,
    brain = '';
  
  console.log('daughter hears (livingroom): ' + livingroom.message);

  return {
    listen: function(message) {
       brain = message;
       console.log('daughter hears (brain): ' + brain);
    }
  }
});

