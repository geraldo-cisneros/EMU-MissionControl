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
//Imports list
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var emu_service_1 = require("./services/emu.service");
//Variables
var interval_switch;
var AppComponent = /** @class */ (function () {
    function AppComponent(http, emu) {
        this.http = http;
        this.emu = emu;
        this.title = 'NASA SUITS 2019';
    }
    //*************************************UIA****************************************
    AppComponent.prototype.startUiaSimulation = function () {
        var _this = this;
        this.http.post('http://localhost:3000/api/simulation/uiastart', {})
            .subscribe(function (data) {
            console.log(data);
        });
        //updates data every 1 second
        interval_switch = setInterval(function () { _this.getUiaData(); }, 1000);
        console.log('server is running...');
    };
    //STOPS THE SERVER AND DATA STREAM
    AppComponent.prototype.stopUiaSimulation = function () {
        this.http.post('http://localhost:3000/api/simulation/uiastop', {})
            .subscribe(function (data) {
            console.log(data);
        });
        clearInterval(interval_switch);
        console.log('uia has stopped');
    };
    //SIMULATION IS PAUSED
    AppComponent.prototype.pauseUiaSimulation = function () {
        this.http.post('http://localhost:3000/api/simulation/uiapause', {})
            .subscribe(function (data) {
            console.log(data);
        });
    };
    //UiaSIMULATION IS RESUMED
    AppComponent.prototype.resumeUiaSimulation = function () {
        this.http.post('http://localhost:3000/api/simulation/uiaunpause', {})
            .subscribe(function (data) {
            console.log(data);
        });
    };
    //***********************************Telemetry*************************************
    //STARTS THE SERVER AND DATA STREAM
    AppComponent.prototype.startSimulation = function () {
        var _this = this;
        this.http.post('http://localhost:3000/api/simulation/start', {})
            .subscribe(function (data) {
            console.log(data);
        });
        //updates data every 1 second
        interval_switch = setInterval(function () { _this.getData(); }, 1000);
        console.log('server is running...');
    };
    //STOPS THE SERVER AND DATA STREAM
    AppComponent.prototype.stopSimulation = function () {
        this.http.post('http://localhost:3000/api/simulation/stop', {})
            .subscribe(function (data) {
            console.log(data);
        });
        clearInterval(interval_switch);
        console.log('server has stopped');
    };
    //SIMULATION IS PAUSED
    AppComponent.prototype.pauseSimulation = function () {
        this.http.post('http://localhost:3000/api/simulation/pause', {})
            .subscribe(function (data) {
            console.log(data);
        });
    };
    //SIMULATION IS RESUMED
    AppComponent.prototype.resumeSimulation = function () {
        this.http.post('http://localhost:3000/api/simulation/unpause', {})
            .subscribe(function (data) {
            console.log(data);
        });
    };
    //DEPLOYS FAN ERROR
    AppComponent.prototype.deployError = function () {
        this.http.patch('http://localhost:3000/api/simulation/deployerror?fan_error=true', {})
            .subscribe(function (data) {
            console.log(data);
        });
    };
    //RESOLVES FAN ERROR
    AppComponent.prototype.resolveError = function () {
        this.http.patch('http://localhost:3000/api/simulation/deployerror?fan_error=false', {})
            .subscribe(function (data) {
            console.log(data);
        });
    };
    //DEPLOYS FAN ERROR
    AppComponent.prototype.setHandHold = function (val) {
        this.http.patch("http://localhost:3000/api/simulation/hand-hold?handhold=" + val, {})
            .subscribe(function (data) {
            console.log(data);
        });
    };
    //GETS DATA FOR STREAM
    AppComponent.prototype.getUiaData = function () {
        var _this = this;
        this.emu.getUia()
            .subscribe(function (data) {
            _this.uias = data;
            _this.uias = Array.of(_this.uias);
            console.log(_this.uias);
        });
    };
    //GETS DATA FOR STREAM
    AppComponent.prototype.getData = function () {
        var _this = this;
        this.emu.getEMU()
            .subscribe(function (data) {
            _this.telems = data;
            _this.telems = Array.of(_this.telems);
            console.log(_this.telems);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, emu_service_1.EMUService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map