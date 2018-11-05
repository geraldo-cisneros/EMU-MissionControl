"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var angular_bootstrap_md_1 = require("angular-bootstrap-md");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var http_2 = require("@angular/common/http");
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var data_service_1 = require("./services/data.service");
var app_component_1 = require("./app.component");
var emu_service_1 = require("./services/emu.service");
var uia_component_1 = require("./controllers/uia.component");
var dcu_component_1 = require("./controllers/dcu.component");
var routes = [
    { path: 'uia', component: uia_component_1.UIAComponent },
    { path: 'dcu', component: dcu_component_1.DCUComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                uia_component_1.UIAComponent,
                dcu_component_1.DCUComponent,
            ],
            exports: [
                router_1.RouterModule
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_2.HttpClientModule,
                angular_bootstrap_md_1.MDBBootstrapModule.forRoot(),
                ng_bootstrap_1.NgbModule.forRoot(),
                router_1.RouterModule.forRoot(routes)
            ],
            schemas: [core_2.CUSTOM_ELEMENTS_SCHEMA
            ],
            providers: [
                data_service_1.DataService,
                emu_service_1.EMUService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map