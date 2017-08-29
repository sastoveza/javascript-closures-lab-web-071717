function bumpCounter() {
	var counter = 0

function addBump () {
	counter += 1;
	}

function getBumps() {
	return counter;
}
	return {
		addBump,
		getBumps
	}
}

function createAnimal(animalType) {
	return function (deadlyDevice) {

		var object = {}

		object.animalType = animalType
		object.deadlyDevice = deadlyDevice
		return object;
	}
}


var sharkCreator = createAnimal('Shark')

var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')

var sharkWithFrickinCannon = sharkCreator('Cannon')

