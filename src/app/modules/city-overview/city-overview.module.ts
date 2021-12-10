import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CityOverviewComponent } from './components/city-overview/city-overview.component';

@NgModule( {
	declarations: [ CityOverviewComponent ],
	imports: [
		CommonModule,
		SharedModule,
	],
	exports: [ CityOverviewComponent ],
} )
export class CityOverviewModule { }
