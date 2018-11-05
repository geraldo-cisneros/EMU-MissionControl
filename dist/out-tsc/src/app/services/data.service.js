"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
var operators_1 = require("../../../node_modules/rxjs/operators");
var rxjs_1 = require("rxjs");
var operators_2 = require("rxjs/operators");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.title = 'app works!';
        this.apiUrl = 'http://localhost:3000/';
        this.data = {};
        console.log('Data service connected');
    }
    DataService.prototype.createData = function () {
        return this.http.post(this.apiUrl, 'createData running...');
    };
    DataService.prototype.getData = function () {
        return this.http.get(this.apiUrl)
            .pipe(operators_2.map(this.extractData), operators_1.catchError(this.handleErrorObservable));
    };
    DataService.prototype.extractData = function (res) {
        // let body = res.json();
        var body = JSON.parse('{ "myString": "string", "myNumber": 4 }');
        return body;
    };
    DataService.prototype.handleErrorObservable = function (error) {
        return rxjs_1.throwError(error.message || error);
    };
    DataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map