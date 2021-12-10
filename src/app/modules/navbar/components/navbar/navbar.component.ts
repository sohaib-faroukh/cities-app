import { Component, OnInit } from '@angular/core';
import { ROUTES_MAP } from '../../../../routes.map';
@Component( {
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: [ './navbar.component.scss' ],
} )
export class NavbarComponent implements OnInit {

	constructor () { }
	ngOnInit (): void {

	}

	get routerMap (): any {
		return { ...ROUTES_MAP };
	}



}
