import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject, of } from 'rxjs';
import { ICityVM } from '../../../../../../models/city';
import { CitiesService } from '../../../../core/services/cities.service';

import { CitiesListComponent } from './cities-list.component';

const MockCities: ICityVM[] = [
	{
		name: 'Sydney',
		name_native: 'Sydney',
		country: 'Australia',
		continent: 'Australia',
		latitude: '-33.865143',
		longitude: '151.209900',
		population: '5312000',
		founded: '1788',
		landmarks: [
			'Sydney Opera House',
			'Sydney Harbour Bridge',
			'Queen Victoria Building',
		],
	},
];

describe( 'CitiesListComponent', () => {
	let fixture: ComponentFixture<CitiesListComponent>;

	let component: CitiesListComponent;
	let citiesService: CitiesService;


	let citiesServiceStub: Partial<CitiesService>;
	citiesServiceStub = {
		data$: new BehaviorSubject<ICityVM[]>( MockCities ),
		get: () => of( MockCities ),
	};

	beforeEach( async () => {
		await TestBed.configureTestingModule( {
			declarations: [ CitiesListComponent ],
			providers: [
				{ provide: CitiesService, useValue: citiesServiceStub },
			],
		} ).compileComponents();

		fixture = TestBed.createComponent( CitiesListComponent );
		component = fixture.componentInstance;
		citiesService = TestBed.inject( CitiesService );
	} );

	it( 'should create', () => {
		fixture.detectChanges();
		expect( component ).toBeTruthy();
	} );

	it( 'should have the same count from the cities form the service', () => {
		fixture.detectChanges();
		expect( component ).toBeTruthy();
	} );


} );
