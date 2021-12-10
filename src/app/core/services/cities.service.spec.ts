import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { defer, of } from 'rxjs';
import { ICityVM } from '../../../../models/city';
import { CitiesService } from './cities.service';

export const asyncError = <T> ( errorObject: any ) => {
	return defer( () => Promise.reject( errorObject ) );
};

describe( 'CitiesService', () => {
	let httpClientSpy: jasmine.SpyObj<HttpClient>;
	let service: CitiesService;

	beforeEach( () => {
		TestBed.configureTestingModule( {} );
		httpClientSpy = jasmine.createSpyObj( 'HttpClient', [ 'get' ] );
		service = new CitiesService( httpClientSpy );
	} );


	it( 'should return expected cities (HttpClient called once)', ( done: DoneFn ) => {
		const cities: ICityVM[] =
			[
				{ name: 'A' },
				{ name: 'B' },
			];

		httpClientSpy.get.and.returnValue( of( cities ) );

		service.get().subscribe(
			data => {
				expect( data ).toEqual( cities, 'expected cities' );
				done();
			},
			done.fail
		);
		expect( httpClientSpy.get.calls.count() ).toBe( 1, 'one call' );
	} );


	it( 'should return an error when the server returns a 404', ( done: DoneFn ) => {
		const errorResponse = new HttpErrorResponse( {
			error: 'test 404 error',
			status: 404,
			statusText: 'Not Found',
		} );

		httpClientSpy.get.and.returnValue( asyncError( errorResponse ) );

		service.get().subscribe(
			data => done.fail( 'expected an error, not cities' ),
			error => {
				console.log( error );
				expect( error.status ).toEqual( 404 );
				expect( error.error ).toContain( 'test 404 error' );
				expect( error.statusText ).toContain( 'Not Found' );
				done();
			}
		);
	} );

} );
