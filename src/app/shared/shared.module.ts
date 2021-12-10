import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material.module';
import { PipesModule } from './pipes/pipes.module';
import { SpinnerModule } from './spinner/spinner.module';



@NgModule( {
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		NgbDropdownModule,
		PipesModule,
		MaterialModule,
		SpinnerModule,
	],
	exports: [
		FormsModule,
		ReactiveFormsModule,
		NgbDropdownModule,
		MaterialModule,
		PipesModule,
		SpinnerModule,
	],
} )
export class SharedModule { }
