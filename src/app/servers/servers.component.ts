import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus = 'No server was created!';
    serverName = 'TestServer';
    serverCreated = false;
    servers = ['TestServer', 'TestServer 2'];
	buttonOn = false;
	buttonLogs = [];

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit() {
    }

    onCreateServer() {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    }

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }

	onToggleDetails() {
		this.buttonOn = !this.buttonOn;
		if (this.buttonOn) {
			this.buttonLogs.push(new Date());
		}
	}
}
