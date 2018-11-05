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
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var UIAComponent = /** @class */ (function () {
    function UIAComponent(router, http) {
        this.router = router;
        this.http = http;
        this.status = false;
        this.supplystatus = false;
        this.wastestatus = false;
        this.oxstatus = false;
        this.ventstatus = false;
    }
    UIAComponent.prototype.onClick = function () {
        this.router.navigate(['./uia']);
    };
    UIAComponent.prototype.emuOnOff = function () {
        this.status = !this.status;
        if (!this.status) {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?emu_on_off=false1', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
        else {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?emu_on_off=true', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
    };
    UIAComponent.prototype.supplyWater = function () {
        this.supplystatus = !this.supplystatus;
        if (!this.supplystatus) {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?supply=false1', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
        else {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?supply=true', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
    };
    UIAComponent.prototype.wasteWater = function () {
        this.wastestatus = !this.wastestatus;
        if (!this.wastestatus) {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?waste=false1', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
        else {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?waste=true', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
    };
    UIAComponent.prototype.oxygen = function () {
        this.oxstatus = !this.oxstatus;
        if (!this.oxstatus) {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?oxygen=false1', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
        else {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?oxygen=true', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
    };
    UIAComponent.prototype.o2Vent = function () {
        this.ventstatus = !this.ventstatus;
        if (!this.ventstatus) {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?o2_vent=false1', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
        else {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?o2_vent=true', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
    };
    UIAComponent = __decorate([
        core_1.Component({
            selector: 'uia-root',
            templateUrl: './uia.component.html',
            styleUrls: ['./uia.component.scss'],
        }),
        __metadata("design:paramtypes", [router_1.Router, http_1.HttpClient])
    ], UIAComponent);
    return UIAComponent;
}());
exports.UIAComponent = UIAComponent;
//# sourceMappingURL=uia.component.js.map