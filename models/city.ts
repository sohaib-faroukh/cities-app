export interface ICity {
	name?: string;
	name_native?: string;
	country?: string;
	continent?: string;
	latitude?: string;
	longitude?: string;
	population?: string;
	founded?: string;
	landmarks?: string[];
}

export interface ICityVM extends ICity {
	countryCode?: string;
	avatar?: string;
}
