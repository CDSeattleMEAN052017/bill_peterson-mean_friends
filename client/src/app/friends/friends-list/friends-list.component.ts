import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Friend } from "./../friend";
import { Router } from "@angular/router";
import { FriendsService } from "./../friends.service";

@Component({
	selector: 'app-friends-list',
	templateUrl: './friends-list.component.html',
	styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

	friends: Friend[];
	selectedFriend: Friend;
	constructor(private router: Router, private friendsService: FriendsService) { }

	ngOnInit() {
		this.selectedFriend = new Friend;
		this.get_all_friends();
	}

	showFriend(friend: Friend){
		for (let key in friend){
			this.selectedFriend[key] = friend[key];
		}

		this.router.navigate(["/show", friend._id, friend.first_name, friend.last_name, friend.birthday])
	}

	editFriend(friend: Friend){
		for (let key in friend){
			this.selectedFriend[key] = friend[key];
		}

		this.router.navigate(["/edit", friend._id, friend.first_name, friend.last_name, friend.birthday])
	}


	get_all_friends(){
		this.friendsService.get_all_friends()
			.then((data) => {
				this.friends = data;
				for(let friend of this.friends){
					friend.birthday = new Date(friend.birthday).toLocaleDateString();
				}
			})
			.catch((err) => {console.log("error:", err) })
	}

	delete(friend: Friend){
		this.friendsService.deleteFriend(friend);
		this.get_all_friends();
	}
}
