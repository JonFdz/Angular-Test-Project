import { Component, OnInit } from '@angular/core';

import { UsersService } from '../shared/users.service';
import { CounterService } from '../shared/counter.service';

@Component({
	selector: 'app-active-users',
	templateUrl: './active-users.component.html',
	styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{

	activeUsers: string[];
	activeCounter: number;

	constructor(private usersService: UsersService, private counterService: CounterService) { }

	ngOnInit() {
		this.activeUsers = this.usersService.activeUsers;
		this.activeCounter = this.counterService.activeToInactiveCounter;
	}

	onSetToInactive(id: number) {
		this.usersService.setToInactive(id);
	}
}
