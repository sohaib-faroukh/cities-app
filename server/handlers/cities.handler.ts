import { ICity } from '../../models/city';
import { readDataFromFile } from '../../utils/stream-file.util';
import { resolve } from 'path';
import { sortBy } from '../../utils/sort-by.util';

const DB_FILES_PATH = resolve( 'cities.json' );


/**
 * this function is responsible of accession the file, read the content,
 * and parse it into json and return the result when done
 */
export const getAllCities = () => {
	return new Promise( async ( resolvePromise, rejectPromise ) => {
		// this variable will be filled by the api response data
		let results: ICity[] = [];
		// read one by one record of cities form JSON file (stream & parse for better performance)
		await readDataFromFile( DB_FILES_PATH, ( parsedData: { key: string, value: ICity } ) => {
			const data = parsedData.value;
			results.push( data );
		}, 'cities' )
			.then( ( v ) => {
				results = sortBy( results, 'name' );
				resolvePromise( results );
			} ).catch( rejectPromise );
	} );
};
