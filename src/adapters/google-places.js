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

		Default: 2

	range - specifies range of places to retrieve (in meters)
		1..50,000
		Default: 2.5 * 100,000 / 10^precision 

	The forumla for default range (unless overridden with a specific value) guarantees that results returned for a user
	whose true position is on the edge of the cluster contain the results that would have been returned if the users exact
	location had been queried at range = precision sizing. 

	This will allow the API to cache all results within the cluster size, even if it returns only those results within a true
	radius of the user to the client. 

*/
export const nearby = function nearby(lat, long, options) {

	var promise = new Promise((resolve, reject) => {

		let key = config.google.places.key;
		let types = config.google.places.nearby.types.join('|');

		// Precision clusters users 
		let precision = (options && options.precision) || 2;
		precision = Math.round(Math.min(Math.max(precision, 1), 3)); // whole numbers between 1 and 3

		lat = _roundToDecimal(lat, precision);
		long = _roundToDecimal(long, precision);

		// Radius in meters
		let radius = (options && options.radius) || 2.5 * 100000 / Math.pow(10, precision);
		radius = Math.round(radius); // whole numbers

		let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=${radius}&types=${types}&key=${key}`;

		return console.log(url);
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

