// Best Friend
define(['./daughter', './livingroom'],
function (BestFriend, livingroom) {
  console.log('-- bestfriend.js --');

  var x = 14;

  console.log('best friend hears (livingroom): ' + livingroom.message);

  console.log('best friend whispers to daughter');
  BestFriend.listen('you should dump him');
});

