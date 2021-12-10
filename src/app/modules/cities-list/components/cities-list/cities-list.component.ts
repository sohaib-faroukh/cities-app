import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICityVM } from '../../../../../../models/city';
import { CitiesService } from '../../../../core/services/cities.service';


const sortFunctionsMap: Record<string, ( a: ICityVM, b: ICityVM ) => number> = {
	oldestCity: ( a: ICityVM, b: ICityVM ) => Number( a.founded || 0 ) < Number( b.founded || 0 ) ? -1 : 1,
	latestCity: ( a: ICityVM, b: ICityVM ) => Number( a.founded || 0 ) > Number( b.founded || 0 ) ? -1 : 1,
	mostPopular: ( a: ICityVM, b: ICityVM ) => Number( a.population || 0 ) > Number( b.population || 0 ) ? -1 : 1,
	lessPopular: ( a: ICityVM, b: ICityVM ) => Number( a.population || 0 ) < Number( b.population || 0 ) ? -1 : 1,
};


@Component( {
	selector: 'app-cities-list',
	templateUrl: './cities-list.component.html',
	styleUrls: [ './cities-list.component.scss' ],
} )
export class CitiesListComponent implements OnInit, AfterViewInit {

	public sortByControl = new FormControl( '' );
	public cities$: Observable<ICityVM[]>;

	//#region constructor
	constructor ( private citiesService: CitiesService ) {
		this.cities$ = this.initCities();
	}
	//#endregion

	//#region hooks
	ngOnInit (): void {
	}
	ngAfterViewInit (): void {
		this.trackSortValueChanges();
	}

	//#endregion


	//#region methods
	private initCities = () => {
		return this.citiesService.get();
	}


	private trackSortValueChanges = () => {
		this.sortByControl.valueChanges.subscribe( value => {
			if ( !value ) return;
			else {
				console.log( '********************* sorting', value );
				this.cities$ = this.cities$.pipe(
					map( cities => cities.sort( sortFunctionsMap[ value ] ) )
				);
			}
			return;
		} );
	}

	//#endregion

}

