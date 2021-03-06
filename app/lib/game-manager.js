'use strict';

import { Shipyard } from './shipyard';
import { UniverseForge } from './universe-forge';
const linearAlgebra = require('linear-algebra')(),
	Vector = linearAlgebra.Vector,
	Matrix = linearAlgebra.Matrix;

export class GameManager {
	constructor(args) {
		console.log("[GM] Constructing...")

		this.universe = new UniverseForge(50, 100, 100, 100).universe;
		console.log(this.universe);

		this.shipyard = new Shipyard();
		this.ship = this.shipyard.buildShip(this.shipyard.shipTemplate, this.universe);
		console.log(this.ship);

		let newPos = this.ship.transform.translateToVector(this.universe[0].transform.position);
		this.ship.targetSystem = this.universe[1];
		this.ship.crew.get('captain').abilities.get('captain').doMove();
	}

	// we probably want some way to handle real-time loops and
	// async or "jump-ahead" updates
	update (deltaTime) {
		this.ship.crew.get('captain').abilities.get('captain').doMove();
	}

	timer () {
		var d = new Date();
		document.getElementById("demo").innerHTML = d.toLocaleTimeString();
	}

	// temp shortcut
	setRandTarget() {
		let i = Math.floor(Math.random() * this.universe.length);
		console.log('[GM] setting target to ' + this.universe[i].print());
		this.ship.crew.get('captain').abilities.get('captain').setTargetLocation(this.universe[i]);
	}
};