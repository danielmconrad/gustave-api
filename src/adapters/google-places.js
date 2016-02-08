import https from 'https';
import request from 'request';

import config from '../../config.json';

// Helper function for decimal rounding
const _roundToDecimal = function roundToDecimal(num, dec) {
	let m = Math.pow(10, dec);
	return Math.round(num * m)/m;
}

/*
	Returns a promise that will resolve with the Google API response

	Options are precision: {Number}, range: {Number}
	
	precision - specifies the number of decimal places for lat/long, which results in clustering of users
		1: 10km cluster
		2: 1km cluster
		3: 100m cluster
		4: 10m cluster

		Default: 4

	range - specifies range of places to retrieve (in meters)
		1..50,000
		Default: 1000
*/
export const nearby = function nearby(lat, long, options) {

	var promise = new Promise((resolve, reject) => {

		let key = config.google.places.key;
		let types = config.google.places.types.join('|');

		// Precision clusters users 
		let precision = (options && options.precision) || 4;

		lat = _roundToDecimal(lat, precision);
		long = _roundToDecimal(long, precision);

		// Radius in meters
		let radius = (options && options.radius) || 1000;

		let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=${radius}&types=${types}&key=${key}`;

		request(url, (error, response, body) => {

			if (error) {
				reject(error);
			} else {
				resolve(JSON.parse(body));
			}
		});

	});

	return promise;

};


