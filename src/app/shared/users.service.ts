import { Injectable, OnInit } from "@angular/core";

import { CounterService } from './counter.service';

@Injectable({ providedIn: 'root' })
export class UsersService implements OnInit {
	activeUsers = ['Max', 'Anna'];
	inactiveUsers = ['Chris', 'Manu'];

	constructor(private counterService: CounterService) { }

	ngOnInit() {
		this.counterService.activeToInactiveCounter = 0;
		this.counterService.inactiveToActiveCounter = 0;
	}

	setToInactive(id: number) {
		this.inactiveUsers.push(this.activeUsers[id]);
		this.activeUsers.splice(id, 1);
		this.counterService.incrementActiveToInactive();
	}

	setToActive(id: number) {
		this.activeUsers.push(this.inactiveUsers[id]);
		this.inactiveUsers.splice(id, 1);
		this.counterService.incrementInactiveToActive();
	}
}