'use strict';

import { Ship } from './ship';
import { Tavern } from "./tavern"
import { Engine } from './ship_modules/engine'

export class Shipyard {
	constructor(properties) {
		console.log("created a shipyard")
		this.properties = properties;
		this.shipList = [];
		let tavern = new Tavern(); // hack?
		this.shipTemplate = {
			name: 'prototypeShip',
			parameters: {
				
			},
			payload: {
				food: 0,
				oxygen: 0,
				water: 0,
				fuel: 100,
			},
			modules:
				new Map([
						['engine', new Engine({name: 'engine' })]
					]),
			crew:
				new Map ([
						['captain', tavern.generateCrew()],
						['coms', tavern.generateCrew()],
						['quartermaster', tavern.generateCrew()],
						['helms', tavern.generateCrew("helm")]
					])
		};
	}

	buildShip(properties) {
		console.log("spawning a ship with properties:\n " + properties.name);
		let s = new Ship(properties);
		this.shipList.push(s);
		return s;
	}
}
