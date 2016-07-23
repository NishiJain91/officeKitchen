"use strict";
var router_1 = require('@angular/router');
var login_form_component_1 = require('./login/login-form.component');
var register_form_component_1 = require('./register/register-form.component');
exprot;
var routes = [
    { path: 'login', component: login_form_component_1.LoginFormComponent },
    { path: 'register', component: register_form_component_1.RegisterFormComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)];
;
//# sourceMappingURL=app.routes.js.map