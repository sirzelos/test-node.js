var fs = require('fs');

//w = emtry
fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});// if no file  mynewfile2.txt  ,file created