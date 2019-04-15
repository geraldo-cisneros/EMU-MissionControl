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
        this.status1 = false;
        this.supplystatus = false;
        this.supply1status = false;
        this.waste1status = false;
        this.wastestatus = false;
        this.oxstatus = false;
        this.ox1status = false;
        this.pumpstatus = false;
        this.ventstatus = false;
    }
    UIAComponent.prototype.onClick = function () {
        this.router.navigate(['./uia']);
    };
    UIAComponent.prototype.emuOnOff1 = function () {
        this.status1 = !this.status;
        if (!this.status1) {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?emu1=false', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
        else {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?emu1=true', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
    };
    UIAComponent.prototype.emuOnOff2 = function () {
        this.status = !this.status;
        if (!this.status) {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?emu2=false', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
        else {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?emu2=true', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
    };
    UIAComponent.prototype.supplyWater1 = function () {
        this.supply1status = !this.supply1status;
        if (!this.supply1status) {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?ev1_supply=false', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
        else {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?ev2_supply=true', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
    };
    UIAComponent.prototype.supplyWater2 = function () {
        this.supplystatus = !this.supplystatus;
        if (!this.supplystatus) {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?ev2_supply=false', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
        else {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?ev2_supply=true', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
    };
    UIAComponent.prototype.wasteWater1 = function () {
        this.waste1status = !this.waste1status;
        if (!this.waste1status) {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?ev1_waste=false', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
        else {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?ev1_waste=true', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
    };
    UIAComponent.prototype.wasteWater2 = function () {
        this.wastestatus = !this.wastestatus;
        if (!this.wastestatus) {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?ev2_waste=false', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
        else {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?ev2_waste=true', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
    };
    UIAComponent.prototype.oxygen1 = function () {
        this.ox1status = !this.ox1status;
        if (!this.ox1status) {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?emu1_O2=false', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
        else {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?emu1_O2=true', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
    };
    UIAComponent.prototype.oxygen2 = function () {
        this.oxstatus = !this.oxstatus;
        if (!this.oxstatus) {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?emu2_O2=false', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
        else {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?emu2_O2=true', {})
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
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?O2_vent=false', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
        else {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?O2_vent=true', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
    };
    UIAComponent.prototype.depressPump = function () {
        this.pumpstatus = !this.pumpstatus;
        if (!this.pumpstatus) {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?depress_pump=false', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
        else {
            {
                this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?depress_pump=true', {})
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