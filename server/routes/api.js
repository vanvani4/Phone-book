var express = require('express');//
const app = express();
// const bodyParser = require('body-parser');
const multer = require('multer');//
const router = express.Router();//
// var gm = require('gm').subClass({imageMagick: true});
// const path = require('path');

// app.use(express.static('dist')); // new
// app.use(express.static(__dirname)); // new
// app.use(express.static(path.join(__dirname, 'photo_person')));

var person = [
  {name: 'Oleg', phone: 123456, birthday: '15 November 2010', id: 1},
  {name: 'Osip', phone: 654321, birthday: '23 April 1943', id: 2},
  {name: 'Oleg', phone: 123654, birthday: '1 January 2000', id: 3}
];

var count = 4;
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
      //console.log(item.phone.toString(), +req.body.value);
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
    cb(null, __dirname + '/..//photo_person');
  },
  filename: function (req, file, cb) {
    cb(null, count + '.jpg');
  }
});

var upload = multer({ storage: storage });

router.post('/add', upload.single('photo'), function(req, res, next) {
  console.log('POST ADD!');
  person.push({name: req.body.name, phone: req.body.phone, id: count});
  count++;
  console.log('storage', storage.getDestination());
  console.log('dirname', __dirname + '/..//photo_person');
//   cloudinary.uploader.upload(req.file.path, function(result) {
//     person.push({name: req.body.name, phone: req.body.phone, photo: result.url});
// });
//console.log(person);
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
