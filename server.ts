import * as express from 'express';
import { NextFunction, Router } from 'express';
import { getEnvironment } from './server/environments/env.util';
import { cors } from './utils/cors.util';
import * as logger from 'morgan';
import { requestResponder } from './utils/request-responder.util';
import { getCities } from './server/routes/cities.routes';



const env = process.argv?.includes( '--production' ) ? getEnvironment( 'prod' ) : getEnvironment();
const ANGULAR_DIST_FILES = env?.ANGULAR_DIST_FILES;
const PORT = env.PORT || 8081;
const PREFIX = '/api';

// * Define the routes

const apiRoutesNotAuth: Router = Router();


// * Cities routes
apiRoutesNotAuth.route( PREFIX + '/cities' ).get( getCities );



// * Frontend application files
apiRoutesNotAuth.route( '/*' ).get( ( req, res ) =>
	res.sendFile( ANGULAR_DIST_FILES.rootFile, { root: ANGULAR_DIST_FILES.path } )
);



// * Bootstrapping the application
const expressApp = express();

expressApp.use( express.static( ANGULAR_DIST_FILES.path ) );
expressApp.use( express.json() );
expressApp.use( express.urlencoded( { limit: '200mb', extended: true } ) );

expressApp.use( cors );
expressApp.use( logger( 'short' ) );
expressApp.use( apiRoutesNotAuth );
expressApp.use( '', requestResponder( ( req: Request, res: Response, next: NextFunction ) => {
	throw new Error( 'Route is not implemented' );
} ) );


const bootstrapTheApp = async () => {
	expressApp.listen( PORT, async () => {
		console.log( `\n***** THE APP IS RUNNING ON PORT #${ PORT } *****\n` );
	} );
};
bootstrapTheApp();

export const app = expressApp;
