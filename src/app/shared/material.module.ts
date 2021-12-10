import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';


const MatModules = [
	MatCardModule,
	MatProgressBarModule,
	MatSelectModule,
];
@NgModule( {
	imports: [ ...MatModules ],
	exports: [ ...MatModules ],
} )
export class MaterialModule { }
