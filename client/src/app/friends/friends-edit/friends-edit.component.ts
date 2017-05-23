import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Friend } from "./../friend";
import { Router, ActivatedRoute, Params } from "@angular/router";
import 'rxjs/add/operator/switchMap';
import { FriendsService } from "./../friends.service";

@Component({
	selector: 'app-friends-edit',
	templateUrl: './friends-edit.component.html',
	styleUrls: ['./friends-edit.component.css']
})
export class FriendsEditComponent implements OnInit {

	@Input() selectedFriend: Friend;

	myFriend = {id: "", first_name: "", last_name: "", birthday: ""};
	newFriend: Friend;

	constructor(private router: Router, private route: ActivatedRoute, private friendsService: FriendsService) { }

	ngOnInit() {
		this.newFriend = new Friend;

		this.myFriend = {id: this.route.snapshot.params["id"], first_name: this.route.snapshot.params["first_name"], last_name: this.route.snapshot.params["last_name"], birthday: this.route.snapshot.params["birthday"]}

		this.route.params.subscribe((params) => {
			this.myFriend = {id: params.id, first_name: params.first_name, last_name: params.last_name, birthday: params.birthday};
			console.log(this.myFriend);
		})
	}

	update(){
		this.newFriend = {_id: this.myFriend.id, first_name: this.myFriend.first_name, last_name: this.myFriend.last_name, birthday: this.myFriend.birthday}

		this.friendsService.updateFriend(this.newFriend)
			.then(() => {
				this.newFriend = new Friend;
				this.router.navigate(["/"]);
			})
			.catch((err) => console.log(err));
	}

}
