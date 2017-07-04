
app.factory("CompanyService", function ($http) {
    return {
        getAll:function () {
            return $http({
                method:'GET',
                url:'http://localhost:8080/companies'
            })
        },

        getCompaies:function () {

          return $http({
              method:'GET',
              url:'http://localhost:8080/companies'
          })
        },

        createTree:function(companies) {
                var companiesOrg = [];
                companiesq = JSON.parse(JSON.stringify(companies));
                function findChildren(obj) {
                    for (x in companiesq) {
                        if (companiesq[x].parent_id == obj.id) {
                            if (!obj.children) {
                                obj.children = [];
                            }

                            obj.children.push(companiesq[x]);
                            findChildren(companiesq[x]);
                        }

                    }
                }

                function a(obj) {
                    if (obj.children && obj.children.length > 0) {
                        for (i in obj.children) {
                            obj.company_earnings += a(obj.children[i]);
                        }
                        return obj.company_earnings + obj.company_earning;
                    } else {
                        return obj.company_earning;
                    }
                }


                for (x in companiesq) {
                    if (companiesq[x].parent_id == 0) {
                        companiesOrg.push(companiesq[x]);
                        findChildren(companiesq[x])
                    }
                }
                for (x in companiesOrg) {
                    a(companiesOrg[x])
                }

                return companiesOrg;

                },




        // getCompaies: function () {
        //     var companiesOrg =[];
        //     companiesq = JSON.parse(JSON.stringify(companies));
        //
        //     function findChildren(obj) {
        //         for(x in companiesq){
        //             if(companiesq[x].parent_id == obj.id){
        //                 if(!obj.children){
        //                     obj.children=[];
        //                 }
        //
        //                 obj.children.push(companiesq[x]);
        //                 findChildren(companiesq[x]);
        //             }
        //
        //         }
        //     }
        //
        //     function a(obj) {
        //         if(obj.children&&obj.children.length > 0){
        //             for(i in obj.children){
        //                 obj.earnings += a(obj.children[i]);
        //             }
        //             return obj.earnings + obj.earning;
        //         }else{
        //             return obj.earning;
        //         }
        //     }
        //
        //
        //     for(x in companiesq){
        //         if(companiesq[x].parent_id == 0){
        //             companiesOrg.push(companiesq[x]);
        //             findChildren(companiesq[x])
        //         }
        //     }
        //     for(x in companiesOrg){
        //         a(companiesOrg[x])
        //     }
        //
        //     return companiesOrg;
        //
        // },


        addCompanies:function (company) {
            // company.id = companies.length+1;
            // companies.push(company);
            return $http({
                url:'http://localhost:8080/addCompanie',
                method:'POST',
                data: company
            })
        },



        deleteCompanies:function (id_company) {

                return $http({
                    url:'http://localhost:8080/delete/'+id_company,
                    method:'DELETE'
                })
            // for(var i=0;i<companies.length;i++){
            //     if(id_company==companies[i].id){
            //         for(var j = 0; j<companies.length; j++){
            //             if(companies[j].parent_id == companies[i].id){
            //                 companies[j].parent_id = companies[i].parent_id;
            //             }
            //         }
            //         companies.splice(i,1);
            //     }
            // }
        },
        updateCompanies:function (companie) {

            return $http({
                url:'http://localhost:8080/changeCompanies/'+companie.id,
                method:'PUT',
                data: companie
            })

            // for (var i = 0; i < companies.length; i++) {
            //     if (obj.id == companies[i].id) {
            //         delete obj.children;
            //         companies.splice(i, 1, obj)
            //
            //
            //     }
            // }
        }
    }
});

// var companies=[];

// var companies=[{
//         id: 1,
//         name: "Main.js",
//     earnings: 0,
//         parent_id: 0,
//         earning : 10,
//     },
//     {
//         id: 2,
//         name: "Main 2",
//         earning: 10,
//         parent_id: 0,
//         earnings: 0,
//     },
//     {
//         id: 3,
//         name: "Child.js",
//         earning: 20,
//         parent_id: 1,
//         earnings: 0,
//     },
//     {
//         id: 4,
//         name: "Child 2",
//         earning: 20,
//         parent_id: 2,
//
//         earnings: 0,
//     },{
//         id: 5,
//         name: "Child 3.js",
//         earning: 20,
//         parent_id: 1,
//         earnings: 0,
//     },
//     {
//         id: 7,
//         name: "Angular 2",
//         earning: 20,
//         parent_id: 4,
//         earnings: 0,
//     },
//     {
//         id: 8,
//         name: "React.js",
//         earning: 20,
//         parent_id: 4,
//         earnings: 0,
//     },
//     {
//         id: 9,
//         name: "Explorer",
//         earning: 20,
//         parent_id: 3,
//         earnings: 0,
//
//     },
//
// ]


var x = f();

function f() {
return 5
}




