
app.factory("CompanyService", function ($http) {
    return {
        getCompany: function () {
          return $http({
               url:'http://localhost:8080/companies',
               method:'GET'
           })
        },
        getChildCompany: function () {
            return $http({
                url:'http://localhost:8080/companiesChild',
                method:'GET'
            })
        },
        deleteCompany: function (id) {
          return $http({
                url:'http://localhost:8080/delete/'+id,
                method:'DELETE'
            })
        },
        deleteChildCompany:function (id) {
            return $http({
                url:'http://localhost:8080/deleteChild/'+id,
                method:'DELETE'
            })
        },

        addCompany: function (company) {
            return $http({
                url:'http://localhost:8080/addCompanie',
                method:'POST',
                data: company
            })
        },

        updateCompany: function (company) {
            return $http({
                url:'http://localhost:8080/changeCompanies/'+company.id,
                method:'PUT',
                data: company
            })
        },

        addChildCompany: function (company) {


            return $http({
                url:'http://localhost:8080/addCompanieChild',
                method:'POST',
                data: company
            });
        },
        updateChildCompany: function (company) {
            return $http({
                url:'http://localhost:8080/changeChildCompanie/'+company.id_company,
                method:'PUT',
                data: company
            })
        },


    }
})
var companies = [
    {
        id: 1,
        name: "Google",
        earnings: 100,
    },
    {
        id: 2,
        name: "Facebook",
        earnings: 80,
    },

    {
        id: 3,
        name: "Microsoft",
        earnings: 60,
    }

]
var childCompanies = [
    {
        id: 1,
        name: "Angular.js",
        earnings: 40,
        id_company: 1,
    },
    {
        id: 2,
        name: "Angular 2",
        earnings: 40,
        id_company: 1,
    },
    {
        id: 3,
        name: "React.js",
        earnings: 30,
        id_company: 2,
    },
    {
        id: 4,
        name: "Explorer",
        earnings: 1,
        id_company: 3,

    }
]


