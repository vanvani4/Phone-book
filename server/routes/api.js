var express = require('express');
const app = express();

const multer = require('multer');
const router = express.Router();

var person = [
  {name: 'Oleg', phone: 123456, birthday: '15 November 2010', id: 1},
  {name: 'Osip', phone: 654321, birthday: '23 April 1943', id: 2},
  {name: 'Oleg', phone: 123654, birthday: '1 January 2000', id: 3},
  {name: 'Dmitrii', phone: 865758, birthday: '16 May 1985', id: 5}
];

var count = 6;
loggedIn = false;

router.get('/', function (req, res) {
  console.log('Get!');
  res.send(person);
});


router.put('/', function (req, res) {
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

//Download photo

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/app/server/photo_person');
  },
  filename: function (req, file, cb) {
    cb(null, count + '.JPG');
  }
});

var upload = multer({ storage: storage });

router.post('/add', upload.single('photo'), function(req, res, next) {
  console.log('POST ADD!');
  person.push({name: req.body.name, phone: req.body.phone, id: count});
  count++;
});

router.post('/login', function(req, res) {
  console.log('POST LOGIN!');
  if (req.body.login === 'admin' && req.body.pass === 'admin') {
    loggedIn = true;
    res.send('1');
  }
});

router.get('/logout', function (req, res) {
  loggedIn = false;
});

module.exports = router;
