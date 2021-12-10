import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarModule } from '../../modules/navbar/navbar.module';
import { ROUTES_MAP } from '../../routes.map';
import { ClientLayoutComponent } from './client-layout.component';

const routes: Routes = [
	{
		path: ROUTES_MAP.empty, component: ClientLayoutComponent, children: [
			{ path: ROUTES_MAP.empty, pathMatch: 'full', redirectTo: ROUTES_MAP.cities },
			{
				path: ROUTES_MAP.cities, loadChildren: () => import( '../../modules/cities-list/cities-list.module' )
					.then( m => m.CitiesListModule ),
			},
		],
	},
];

@NgModule( {
	declarations: [ ClientLayoutComponent ],
	imports: [
		CommonModule,
		RouterModule.forChild( routes ),
		NavbarModule,
	],
} )
export class ClientLayoutModule { }
