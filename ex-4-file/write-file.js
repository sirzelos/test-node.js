var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});//if no file mynewfile3.txt, mynewfile3.txt created
//if have file mynewfile3.txt, mynewfile3.txt replace to new