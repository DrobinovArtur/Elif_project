var express = require("express");
var db = require("./modules/db").db;
var bodyParser=require("body-parser")
var app= express();


app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Cache-Control");
    if (req.method === 'OPTIONS') {
        res.statusCode = 204;
        return res.end();
    } else {
        return next();
    }
});

app.post('/addCompanie',function (req,res) {
    console.log(req.body);
    db.addCompanie(req.body,function (data) {
        res.send(data);
    });

})

app.get('/companies',function (req,res) {
    db.getCompanies(function (data) {
        res.send(data);
    })
});


app.delete('/delete/:id',function (req,res) {
    var id=req.params.id;
    db.deleteCompanie(id,function (x) {
        res.send(x);
    });

});

app.put('/changeCompanies/:id',function(req,res){
    var id=req.params.id;
       db.changeCompanie(req.body,id,function (data) {
        res.send(data);
    });
    
})

// //ChildCompanies
//
//
// app.post('/addCompanieChild',function (req,res) {
//     console.log(req.body);
//     db.addChildCompanie(req.body,function (data) {
//         res.send(data);
//     });
//
//     // res.send();
// })
//
// app.get('/companiesChild',function (req,res) {
//     db.getChildCompanies(function (data) {
//         res.send(data);
//     })
// });
//
// app.delete('/deleteChild/:id',function (req,res) {
//     var id=req.params.id;
//     db.deleteChildCompanie(id,function (x) {
//         res.send(x);
//     });
//
// });
//
// app.put('/changeChildCompanie/:id',function(req,res){
//     var id=req.params.id;
//        db.changeChildCompanie(req.body,id,function (data) {
//         res.send(data);
//     });
//
// })





app.listen(8080,function () {
    console.log("Listen on port 8080");
});

