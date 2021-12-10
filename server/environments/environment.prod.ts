import * as  dotenv from 'dotenv';
dotenv.config();

export const environment = {
	production: true,
	PORT: process.env.PORT || 8080,
	ANGULAR_DIST_FILES: {
		path: 'cities-app',
		rootFile: 'index.html',
	},
};
