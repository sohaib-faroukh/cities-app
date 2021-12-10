import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getAllCities } from '../handlers/cities.handler';

export const getCities: RequestHandler[] = [
	async ( req: Request, res: Response, next: NextFunction ) => {
		try {
			const result = await getAllCities();
			if ( !result ) {
				res.send( { error: 'No cities are found' } ).status( StatusCodes.NOT_FOUND );
			}
			res.send( result ).status( StatusCodes.OK );
		} catch ( error ) {
			res.send( error ).status( StatusCodes.INTERNAL_SERVER_ERROR );
		}
	},
];




