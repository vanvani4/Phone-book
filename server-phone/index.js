var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');

var person = [
  {name: "Oleg", phone: 123456, birthday: "15 November 2010",id: 1},
  {name: "Osip", phone: 654321, birthday: "23 April 1943", id: 2},
  {name: "Oleg", phone: 123654, birthday: "1 January 2000", id: 3}
];

var count = 4;
loggedIn = false;


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();
});

app.use(bodyParser.json());
app.use(express.static('photo_person'));

app.get('/', function (req, res) {
  res.send(person);
  console.log('Get!');
});


app.put('/', function (req, res) {
  let foundArr = [];

  if(isNaN(req.body.value)) {
    person.forEach(function(item, i, prod) {
      if(item.name.toUpperCase().indexOf(req.body.value.toUpperCase()) === 0) {
        foundArr.push(item);
      }
    });
  } else {
    person.forEach(function(item, i, prod) {
      let phone = item.phone.toString()
      if(phone.indexOf(req.body.value) === 0) {
        foundArr.push(item);
      };
    });
  }

  res.send(foundArr);
  console.log('Get found!');
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/Users/Ivan/Documents/Angular/phone-book/server-phone/photo_person')
  },
  filename: function (req, file, cb) {
    cb(null, count + '.jpg')
  }
});

var upload = multer({ storage: storage });

app.post('/add', upload.single('photo'), function(req, res, next) {
  console.log('POST ADD!');
  person.push({name: req.body.name, phone: req.body.phone, id: count});
  count++;
//   cloudinary.uploader.upload(req.file.path, function(result) {
//     person.push({name: req.body.name, phone: req.body.phone, photo: result.url});
// });
console.log(person);
});

app.post('/login', function(req, res) {
  console.log('POST LOGIN!');
  if (req.body.login === 'admin' && req.body.pass === 'admin') {
    loggedIn = true;
    res.send('1');
  }
});

app.get('/logout', function (req, res) {
  loggedIn = false;
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
