import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ICityVM } from '../../../../../../models/city';
@Component( {
	selector: 'app-city-overview',
	templateUrl: './city-overview.component.html',
	styleUrls: [ './city-overview.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush,
} )
export class CityOverviewComponent implements OnInit {

	@Input() public city?: ICityVM = undefined;

	constructor () { }

	ngOnInit (): void {
	}

}
