//get the names of planets
// async function getData() {
// 	const response = await axios.get('https://swapi.dev/api/planets/');

// 	for (let planet of response.data.results) {
// 		console.log(planet.name);
// 	}
// }

// getData();
// console.log('i happen after getData()!');

//------------------------------------------------------------------------

//multiple requests
async function getData2() {
	const response = await axios.get('https://swapi.dev/api/planets/');
	const { next, results } = response.data;
	console.log(next);
	for (let planet of results) {
		console.log(planet.name);
	}
	const response2 = await axios.get(next);
	const results2 = response2.data.results;
	for (let planet of results2) {
		console.log(planet.name);
	}
}

//getData2();
