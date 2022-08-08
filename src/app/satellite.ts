export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
	isSpaceDebris(): boolean {
		if (this.type === 'Space Debris') {
			return true;
		}
		return false;
		// let isItSpaceTrash;
		// isItSpaceTrash = spaceObj === "Space Debris"? true:false;
		// return isItSpaceTrash;
   }
}

// TODO 3a: fix isSpaceDebris check
