import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormatBigNumberPipe } from './format-big-number.pipe';

const pipes = [
	FormatBigNumberPipe,
];

@NgModule( {
	declarations: [ ...pipes ],
	imports: [
		CommonModule,
	],
	exports: [ ...pipes ],
} )
export class PipesModule { }
