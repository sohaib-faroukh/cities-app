import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES_MAP } from './routes.map';

const routes: Routes = [

	{
		path: ROUTES_MAP.empty, loadChildren: () => import( './layouts/client-layout/client-layout.module' ).then( m => m.ClientLayoutModule ),
	},
	{ path: ROUTES_MAP.error, redirectTo: ROUTES_MAP.empty },
];

@NgModule( {
	imports: [ RouterModule.forRoot( routes, { useHash: true } ) ],
	exports: [ RouterModule ],
} )
export class AppRoutingModule { }
