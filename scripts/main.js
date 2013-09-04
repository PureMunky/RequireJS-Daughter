console.log('-- main.js --');

require.config({
  baseUrl: 'scripts/app'
});

require([
'./boyfriend',
'./bestfriend'
]);

