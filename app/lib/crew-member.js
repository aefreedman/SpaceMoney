'use strict';

import { GameObject } from './game-object';
import { Ship } from './ship'

export class CrewMember extends GameObject {
	constructor(properties) {
		super(properties);
		this.full_name = properties.full_name;
		console.log("created a crew member with full name " + properties.full_name);
	}
}
