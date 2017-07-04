var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ElifTech2'
});


function getCompanies(callback) {
    connection.query("select * from companies",function (err,data) {
        if(err) throw err;
        callback(data);
    });
}



function deleteCompanie(id,callback){
    connection.query("delete from companies where id=?", [id] ,function (err){
        if(err)throw err;
        callback("OK");

    });
};

function addCompanie(data,callback) {
    // data=JSON.parse(data);
    connection.query("insert into companies(company_name,company_earning,company_earnings,parent_id) value(?,?,?,?)",
        [data.company_name,data.company_earning,data.company_earnings,data.parent_id],function (err){
        if(err)throw err;
            connection.query("select * from companies where company_name=? and company_earning=?",[data.company_name,data.company_earning],function (err,data) {
                if(err)throw err;
                callback(data);
            });
    })

}


function changeCompanie(data,id,callback) {
    connection.query("update companies set company_name=?, company_earning=?,parent_id=? where id=?",
        [data.company_name,data.company_earning,data.parent_id,id],function (err){
        if(err)throw err;
            connection.query("select * from companies where company_name=? and company_earning=?",[data.company_name,data.company_earnings],function (err,data) {
                if(err)throw err;
                callback(data);
            });
    })

}



// //ChildCompanies
//
//
//

// function getChildCompanies(callback) {
//     connection.query("select * from child_companies",function (err,data) {
//         if(err)throw err;
//         callback(data);
//     });
// };


//
// function getChildCompanies(callback) {
//     connection.query("select * from child_companies",function (err,data) {
//         if(err)throw err;
//         callback(data);
//     });
// };
//
//
// function deleteChildCompanie(id,callback){
//     connection.query("delete from child_companies where id=?", [id] ,function (err){
//         if(err)throw err;
//         callback("OK");
//
//     });
// };
//
// function addChildCompanie(data,callback) {
//
//     connection.query("insert into child_companies (name_child_company,child_earnings,id_company) values(?,?,?)",
//         [data.name_child_company,data.child_earnings,data.id_company],function (err){
//         if(err)throw err;
//             connection.query("select * from child_companies where name_child_company=? and child_earnings=? and id_company=?",[data.name_company,data.company_earnings, data.id_company],function (err,data) {
//                 if(err)throw err;
//                 callback(data);
//             });
//     })
//
// };
//
// function changeChildCompanie(data,id,callback) {
//     console.log(id)
//     connection.query("update child_companies set name_child_company=?, child_earnings=?,id_company=? where id=?",
//      [data.name_child_company,data.child_earnings,data.id_company,id],function (err){
//         if(err)throw err;
//             connection.query("select * from child_companies where id=?",[id],function (err,data2) {
//                 if(err)throw err;
//                 callback(data2);
//             });
//     })
//
// }



exports.db = {
    getCompanies: getCompanies,
    deleteCompanie:deleteCompanie,
    addCompanie:addCompanie,
    // getChildCompanies:getChildCompanies,
    // addChildCompanie:addChildCompanie,
    // deleteChildCompanie:deleteChildCompanie,
    changeCompanie:changeCompanie,
    // changeChildCompanie:changeChildCompanie
}


