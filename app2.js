//function to get launches and rocket data names
// async function getLaunches() {
// 	const res = await axios.get('https://api.spacexdata.com/v3/launches/upcoming');
// 	console.log(res.data);
// 	for (let launch of res.data) {
// 		console.log(launch.mission_name);
// 		console.log(launch.rocket.rocket_name);
// 	}
// }
//getLaunches();

//now we are going to do that, but append it to a ul on the page
//inline first
// async function getLaunches() {
// 	const res = await axios.get('https://api.spacexdata.com/v3/launches/upcoming');
// 	const ul = document.querySelector('#launches');
// 	for (let launch of res.data) {
// 		const newLI = document.createElement('LI');
// 		const mission = document.createElement('B');
// 		mission.innerText = launch.mission_name;
// 		newLI.append(mission);
// 		newLI.innerHTML += ` - ${launch.rocket.rocket_name}`;
// 		ul.append(newLI);
// 	}
// }
//getLaunches();

//we will now break things out into their own functions instead
// async function getLaunches() {
// 	const res = await axios.get('https://api.spacexdata.com/v3/launches/upcoming');
// 	const ul = document.querySelector('#launches');
// 	renderLaunches(res.data);
// }

// function renderLaunches(launches) {
// 	for (let launch of launches) {
// 		const ul = document.querySelector('#launches');
// 		const newLI = document.createElement('LI');
// 		const mission = document.createElement('B');
// 		mission.innerText = launch.mission_name;
// 		newLI.append(mission);
// 		newLI.innerHTML += ` - ${launch.rocket.rocket_name}`;
// 		ul.append(newLI);
// 	}
// }
//getLaunches();

//then even further plus make button clickable
async function getLaunches() {
	const res = await axios.get('https://api.spacexdata.com/v3/launches/upcoming');
	const ul = document.querySelector('#launches');
	renderLaunches(res.data);
}

function renderLaunches(launches) {
	const ul = document.querySelector('#launches');
	for (let launch of launches) {
		ul.append(makeLaunchLI(launch));
	}
}

function makeLaunchLI(launch) {
	const newLI = document.createElement('LI');
	const mission = document.createElement('B');
	mission.innerText = launch.mission_name;
	newLI.append(mission);
	newLI.innerHTML += ` - flight number ${launch.flight_number}, at ${launch.launch_date_local},`;
	return newLI;
}

const btn = document.querySelector('#getLaunches');
btn.addEventListener(
	'click',
	function() {
		getLaunches();
	},
	{ once: true }
);
