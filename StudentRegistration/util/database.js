
const mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  database:"nettentra",
  user: "root",
  password: "root"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});



module.exports.add_student = function( studentnamefirst,  studentnamelast, date, email,
     fathernamefirst,  fathernamelast,  mothernamefirst,  mothernamelast,  gender,
     nation, address, city, country, phone, mobile, hscname, hscboard, hscscore, sscname,
     sscboard, sscscore, passport, hscmark, sscmark, semmark, callback) {

    var query =
        "INSERT INTO `student`(`sfirstname`,`slastname`,`date`,`email`,`ffirstname`,`flastname`,`mfirstname`,`mlastname`,`gender`,`nation`,`address`,`city`,`country`,`phone`,`mobile`,`hscname`,`hscboard`,`hscscore`,`sscname`,`sscboard`,`sscscore`,`passport`,`hscmark`,`sscmark`,`semistermark`) VALUES ('" +
        studentnamefirst +
        "','" +
        studentnamelast +
        "','" +
        date +
        "','" +
        email +
        "','" +
        fathernamefirst +
        "','" +
        fathernamelast +
        "','" +
        mothernamefirst +
        "','" +
        mothernamelast +
        "','" +
        gender +
        "','" +
        nation +
        "','" +
        address +
        "','" +
        city +
        "','" +
        country +
        "','" +
        phone +
        "','" +
        mobile +
        "','" +
        hscname +
        "','" +
        hscboard +
        "','" +
        hscscore +
        "','" +
        sscname +
        "','" +
        sscboard +
        "','" +
        sscscore +
        "','" +
        passport +
        "','" +
        hscmark +
        "','" +
        sscmark +
        "','" +
        semmark +
        "')";
    con.query(query, callback);
};




// query = "CREATE TABLE students (id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY, sfirstname varchar(30), slastname varchar(30),
// date varchar(50),email varchar(50),ffirstname varchar(50),flastname varchar(50),mfirstname varchar(50),mlastname varchar(50),
// gender varchar(50),nation varchar(50),address varchar(50), city varchar(50),country varchar(50),phone varchar(50),mobile varchar(50),
// hscname varchar(50),hscboard varchar(50),hscscore varchar(50),sscname varchar(50),sscboard varchar(50),sscscore varchar(50),
// passport MEDIUMBLOB,hscmark MEDIUMBLOB,sscmark MEDIUMBLOB,semistermark MEDIUMBLOB)";

// query = "CREATE TABLE student (id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY, sfirstname varchar(30), slastname varchar(30),
// date varchar(50),email varchar(50),ffirstname varchar(50),flastname varchar(50),mfirstname varchar(50),mlastname varchar(50),
// gender varchar(50),nation varchar(50),address varchar(50), city varchar(50),country varchar(50),phone varchar(50),mobile varchar(50),
// hscname varchar(50),hscboard varchar(50),hscscore varchar(50),sscname varchar(50),sscboard varchar(50),sscscore varchar(50),
// passport varchar(50),hscmark varchar(50),sscmark varchar(50),semistermark varchar(50))";



