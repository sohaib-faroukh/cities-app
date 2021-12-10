import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICityVM } from '../../../../models/city';
import { BaseCrudService } from '../models/base-crud-service';
import { HttpSearchOptions } from '../models/http-search-options';

@Injectable()
export class CitiesService extends BaseCrudService<ICityVM, HttpSearchOptions>{


	constructor ( http: HttpClient ) {
		super( http );
		this.apiUrl = 'api/cities';
	}

}
