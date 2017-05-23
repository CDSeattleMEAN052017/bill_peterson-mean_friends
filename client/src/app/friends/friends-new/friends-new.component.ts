import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Friend } from "./../friend";
import { FriendsService } from "./../friends.service";
import { Router } from "@angular/router";

@Component({
	selector: 'app-friends-new',
	templateUrl: './friends-new.component.html',
	styleUrls: ['./friends-new.component.css']
})
export class FriendsNewComponent implements OnInit {

	newFriend: Friend;

	constructor(private router: Router, private friendsService: FriendsService) { }

	ngOnInit() {
		this.newFriend = new Friend;
	}

	create(){
		this.friendsService.createFriend(this.newFriend)
			.then(() => {
				this.newFriend = new Friend;
				this.router.navigate(["/"]);
			})
			.catch((err) => console.log(err));
	}

}
