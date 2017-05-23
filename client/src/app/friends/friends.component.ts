import { Component, OnInit, OnChanges } from '@angular/core';

import { Friend } from "./friend";
import { Router } from "@angular/router";
import { FriendsService } from "./friends.service";

@Component({
	selector: 'app-friends',
	templateUrl: './friends.component.html',
	styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {


	constructor(private router: Router, private friendsService: FriendsService) { }

	ngOnInit() {

	}


}
