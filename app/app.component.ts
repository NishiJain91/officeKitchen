import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: `<header class="header-container">
  				<ul class="nav nav-pills">
  					<li role="presentation"><a [routerLink]="['/login']">Login</a></li>
  					<li role="presentation"><a [routerLink]="['/register']">Register</a></li>
				</ul>
			</header>
			<router-outlet></router-outlet>`

})
export class AppComponent { }
