import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { CounterService } from '../shared/counter.service';

@Component({
	selector: 'app-inactive-users',
	templateUrl: './inactive-users.component.html',
	styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{

	inactiveUsers: string[];
	inactiveCounter: number;

	constructor(private usersService: UsersService, private counterService: CounterService) { }

	ngOnInit() {
		this.inactiveUsers = this.usersService.inactiveUsers;
		this.inactiveCounter = this.counterService.inactiveToActiveCounter;
	}

	onSetToActive(id: number) {
		this.usersService.setToActive(id);
	}
}

