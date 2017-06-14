app.controller("myCtrl", ["CompanyService", function(CompanyService) {
    var vm = this;

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
    vm.addMainCompany = function () {
        CompanyService.addCompany(vm.newCompany).then(function () {
            vm.init();
        vm.newCompany = new Object();
        })

    };
    vm.addChildCompany = function () {

        CompanyService.addChildCompany(vm.newChildCompany).then(function (data) {
            vm.init();
            vm.newChildCompany = new Object();
        })

    }
    vm.deleteCompany = function (company) {

        CompanyService.deleteCompany(company.id).then(function () {
            vm.init();
        });
    }

    vm.deleteChildCompany = function (child) {
        CompanyService.deleteChildCompany(child.id).then(function () {
            vm.init();
        });

    }


    vm.changeCompanies = function () {
        CompanyService.updateCompany(vm.newCompany).then(function () {
            vm.init();
        });
        vm.newCompany = new Object();
    }
    vm.changeChildCompany = function () {
        CompanyService.updateChildCompany(vm.newChildCompany).then(function () {
            vm.init();
        });
        vm.newChildCompany = new Object();
    };

        vm.init = function () {
            vm.companies = CompanyService.getCompany().then(function (data) {
                vm.companies = data.data;
            });
            vm.childCompanies = CompanyService.getChildCompany().then(function (data) {
                vm.childCompanies = data.data;
            });

        };
    vm.childCompaniesArr=function (id) {
        return vm.childCompanies.filter(function (el) {
            return el.id_company==id;
        })
    }

    vm.init();


}]);