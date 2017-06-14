var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ElifTech'
});


function getCompanies(callback) {
    connection.query("select * from companies",function (err,data) {
        if(err)throw err;
        callback(data);
    });
}

function getChildCompanies(callback) {
    connection.query("select * from child_companies",function (err,data) {
        if(err)throw err;
        callback(data);
    });
};


function deleteCompanie(id,callback){
    connection.query("delete from companies where id=?", [id] ,function (err){
        if(err)throw err;
        callback("OK");

    });
};

function addCompanie(data,callback) {
    // data=JSON.parse(data);
    connection.query("insert into companies(name_company,company_earnings) values(?,?)",
        [data.name_company,data.company_earnings],function (err){
        if(err)throw err;
            connection.query("select * from companies where name_company=? and company_earnings=?",[data.name_company,data.company_earnings],function (err,data) {
                if(err)throw err;
                callback(data);
            });
    })

}


function changeCompanie(data,id,callback) {
    connection.query("update companies set name_company=?, company_earnings=? where id=?",
        [data.name_company,data.company_earnings,id],function (err){
        if(err)throw err;
            connection.query("select * from companies where name_company=? and company_earnings=?",[data.name_company,data.company_earnings],function (err,data) {
                if(err)throw err;
                callback(data);
            });
    })

}



//ChildCompanies




function getChildCompanies(callback) {
    connection.query("select * from child_companies",function (err,data) {
        if(err)throw err;
        callback(data);
    });
};


function deleteChildCompanie(id,callback){
    connection.query("delete from child_companies where id=?", [id] ,function (err){
        if(err)throw err;
        callback("OK");

    });
};

function addChildCompanie(data,callback) {

    connection.query("insert into child_companies (name_child_company,child_earnings,id_company) values(?,?,?)",
        [data.name_child_company,data.child_earnings,data.id_company],function (err){
        if(err)throw err;
            connection.query("select * from child_companies where name_child_company=? and child_earnings=? and id_company=?",[data.name_company,data.company_earnings, data.id_company],function (err,data) {
                if(err)throw err;
                callback(data);
            });
    })

};

function changeChildCompanie(data,id,callback) {
    connection.query("update child_companies set name_child_company=?, child_earnings=?,id_company=? where id=?",
     [data.name_child_company,data.child_earnings,data.id_company,id],function (err){
        if(err)throw err;
            connection.query("select * from child_companies where name_child_company=? and child_earnings=? and id_company=?",[data.name_child_company,data.child_earnings,data.id_company],function (err,data) {
                if(err)throw err;
                callback(data);
            });
    })

}



exports.db = {
    getCompanies: getCompanies,
    deleteCompanie:deleteCompanie,
    addCompanie:addCompanie,
    getChildCompanies:getChildCompanies,
    addChildCompanie:addChildCompanie,
    deleteChildCompanie:deleteChildCompanie,
    changeCompanie:changeCompanie,
    changeChildCompanie:changeChildCompanie
}


