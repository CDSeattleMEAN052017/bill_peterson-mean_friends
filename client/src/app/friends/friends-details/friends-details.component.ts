import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Friend } from "./../friend";
import { Router, ActivatedRoute, Params } from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'app-friends-details',
	templateUrl: './friends-details.component.html',
	styleUrls: ['./friends-details.component.css']
})
export class FriendsDetailsComponent implements OnInit {

	myFriend: object;

	constructor(private router: Router, private route: ActivatedRoute) { }

	ngOnInit() {
		this.myFriend = {id: this.route.snapshot.params["id"], first_name: this.route.snapshot.params["first_name"], last_name: this.route.snapshot.params["last_name"], birthday: this.route.snapshot.params["birthday"]}

		this.route.params.subscribe((params) => {
			this.myFriend = {id: params.id, first_name: params.first_name, last_name: params.last_name, birthday: params.birthday};
			console.log(this.myFriend);
		})
	}

}
