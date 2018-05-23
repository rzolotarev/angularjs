var app;
(function (app) {
    angular.module("productManagement", [])
        .controller("ProductList", ["productResource",]);
})(app || (app = {}));
