
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








