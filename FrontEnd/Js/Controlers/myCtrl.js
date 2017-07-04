app.controller("myCtrl", ["CompanyService", function(CompanyService) {
    var vm = this;






    vm.init = function () {
      CompanyService.getCompaies().then(function (data) {
          vm.companies =data.data;
          vm.companies=CompanyService.createTree(vm.companies);
      });

        CompanyService.getAll().then(function (data) {
            vm.allCompanies =data.data;

        });
    };
    vm.init();


    vm.addCompany = function () {

        vm.newCompany.company_earning = parseInt(vm.newCompany.company_earning);
        vm.newCompany.company_earnings =0;
        CompanyService.addCompanies(vm.newCompany).then(function () {
            vm.init();
        });
        vm.newCompany ={};


    };
    vm.updateCompanies= function () {
        vm.newCompany.company_earning = parseInt(vm.newCompany.company_earning);
        vm.newCompany.company_earnings =0;
        console.log(vm.newCompany)
        CompanyService.updateCompanies(vm.newCompany).then(function () {
            vm.init();
        });
        vm.newCompany = new Object();

        // CompanyService.updateCompanies(vm.newCompany);
        // vm.newCompany=new Object();
        // vm.init();
        };


    vm.deleteCompanies=function (x) {
        CompanyService.deleteCompanies(x).then(function () {
            vm.init();
        });

    }















    // vm.filterCompany = function (id) {
    //     return function (childeCompani) {
    //         if (id == childeCompani.id_company) {
    //             return true;
    //         }
    //         return false;
    //     };
    //
    //
    // };
    // vm.addMainCompany = function () {
    //     CompanyService.addCompany(vm.newCompany).then(function () {
    //         vm.init();
    //     vm.newCompany = new Object();
    //     })
    //
    // };
    // vm.addChildCompany = function () {
    //
    //     CompanyService.addChildCompany(vm.newChildCompany).then(function (data) {
    //         vm.init();
    //         vm.newChildCompany = new Object();
    //     })
    //
    // }
    // vm.deleteCompany = function (company) {
    //
    //     CompanyService.deleteCompany(company.id).then(function () {
    //         vm.init();
    //     });
    // }
    //
    // vm.deleteChildCompany = function (child) {
    //     CompanyService.deleteChildCompany(child.id).then(function () {
    //         vm.init();
    //     });
    //
    // }
    //
    //
    // vm.changeCompanies = function () {
    //     CompanyService.updateCompany(vm.newCompany).then(function () {
    //         vm.init();
    //     });
    //     vm.newCompany = new Object();
    // }
    // vm.changeChildCompany = function () {
    //     CompanyService.updateChildCompany(vm.newChildCompany).then(function () {
    //         vm.init();
    //     });
    //     vm.newChildCompany = new Object();
    // };
    //
    //     vm.init = function () {
    //         vm.companies = CompanyService.getCompany().then(function (data) {
    //             vm.companies = data.data;
    //         });
    //         vm.childCompanies = CompanyService.getChildCompany().then(function (data) {
    //             vm.childCompanies = data.data;
    //         });
    //
    //     };
    // vm.childCompaniesArr=function (id) {
    //     var currentCompany = vm.companies.filter(function (comp) {
    //         return id==comp.id;
    //     });
    //     currentCompany[0].sum = currentCompany[0].company_earnings;
    //     console.log(currentCompany[0])
    //     return  vm.childCompanies.filter (function (el) {
    //         if(el.id_company==id){
    //             currentCompany[0].sum += el.child_earnings;
    //             return true;
    //         }
    //
    //     })
    // };
    //
    // vm.init();


}]);