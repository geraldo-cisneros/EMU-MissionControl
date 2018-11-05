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
var DCUComponent = /** @class */ (function () {
    function DCUComponent(router, http) {
        this.router = router;
        this.http = http;
        this.status = false;
        this.o2status = false;
        this.s3status = false;
        this.s4status = false;
        this.s5status = false;
        this.fanstatus = false;
    }
    DCUComponent.prototype.onClick = function () {
        this.router.navigate(['./uia']);
    };
    DCUComponent.prototype.suitPower = function () {
        this.status = !this.status;
        if (!this.status) {
            {
                this.http.patch('http://localhost:3000/api/simulation/newcontrols?battery_switch=false', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
        else {
            {
                this.http.patch('http://localhost:3000/api/simulation/newcontrols?battery_switch=true', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
    };
    DCUComponent.prototype.o2Switch = function () {
        this.o2status = !this.o2status;
        if (!this.o2status) {
            {
                this.http.patch('http://localhost:3000/api/simulation/newcontrols?O2_switch=false', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
        else {
            {
                this.http.patch('http://localhost:3000/api/simulation/newcontrols?O2_switch=true', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
    };
    DCUComponent.prototype.switch3 = function () {
        this.s3status = !this.s3status;
        if (!this.s3status) {
            {
                this.http.patch('http://localhost:3000/api/simulation/newcontrols?switch3=false', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
        else {
            {
                this.http.patch('http://localhost:3000/api/simulation/newcontrols?switch3=true', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
    };
    DCUComponent.prototype.switch4 = function () {
        this.s4status = !this.s4status;
        if (!this.s4status) {
            {
                this.http.patch('http://localhost:3000/api/simulation/newcontrols?switch4=false', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
        else {
            {
                this.http.patch('http://localhost:3000/api/simulation/newcontrols?switch4=true', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
    };
    DCUComponent.prototype.switch5 = function () {
        this.s5status = !this.s5status;
        if (!this.s5status) {
            {
                this.http.patch('http://localhost:3000/api/simulation/newcontrols?switch5=false', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
        else {
            {
                this.http.patch('http://localhost:3000/api/simulation/newcontrols?switch5=true', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
    };
    DCUComponent.prototype.fanSwitch = function () {
        this.fanstatus = !this.fanstatus;
        if (!this.fanstatus) {
            {
                this.http.patch('http://localhost:3000/api/simulation/newcontrols?fan_switch=false', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
        else {
            {
                this.http.patch('http://localhost:3000/api/simulation/newcontrols?fan_switch=true', {})
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
        }
    };
    DCUComponent = __decorate([
        core_1.Component({
            selector: 'dcu-root',
            templateUrl: './dcu.component.html',
            styleUrls: ['./dcu.component.scss'],
        }),
        __metadata("design:paramtypes", [router_1.Router, http_1.HttpClient])
    ], DCUComponent);
    return DCUComponent;
}());
exports.DCUComponent = DCUComponent;
//# sourceMappingURL=dcu.component.js.map