



var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('../util/database');
var fileUpload = require('express-fileupload')
var multer = require('multer')
const path = require("path")


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use('/images', express.static(path.join(__dirname, 'images')));


router.get('/', function (req, res) {

    res.render('reg.ejs');
});
router.get('/success', function (req, res) {

    res.render('success.ejs');
});
router.get('/error', function (req, res) {

    res.render('error.ejs');
});



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './assets/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() +  path.extname(file.originalname))
    }
})

const upload = multer({storage: storage});




router.post('/handle_form', upload.array('DocumentFile', 4), function (req, res) {



    const data = req.body;


    console.log(data);

    // Optional Field Assign Default Data
    if(data.phone == '' || null){
        data.phone = ' '
    }


     db.add_student(data.studentnamefirst, data.studentnamelast,data.date,data.email,
        data.fathernamefirst, data.fathernamelast, data.mothernamefirst, data.mothernamelast, data.gender,
        data.nation,data.address,data.city,data.country,data.phone,
        data.mobile,data.hscname,data.hscboard,data.hscscore,data.sscname,
        data.sscboard,data.sscscore,data.passport,data.hscmark,data.sscmark,data.semmark);
    
  

    if(db.add_student) {
        console.log('1 Student inserted..');
        res.redirect('/success');
    } else{
        res.redirect('/error');
    }



    console.log("Student Form submitted..");
});





module.exports = router;