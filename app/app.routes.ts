import { provideRouter, RouterConfig } from '@angular/router';
import { LoginFormComponent } from './login/login-form.component';
import { RegisterFormComponent} from './register/register-form.component';

exprot const routes: RouterConfig = [
	{ path: 'login', component: LoginFormComponent},
	{ path: 'register', component: RegisterFormComponent}
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes);
];
