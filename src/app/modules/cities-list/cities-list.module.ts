import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesListComponent } from './components/cities-list/cities-list.component';
import { ROUTES_MAP } from '../../routes.map';
import { CityOverviewModule } from '../city-overview/city-overview.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
	{
		path: ROUTES_MAP.empty, component: CitiesListComponent
	},
];

@NgModule( {
	declarations: [ CitiesListComponent ],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		RouterModule.forChild( routes ),
		SharedModule,
		CityOverviewModule,
	],
} )
export class CitiesListModule { }
