import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from "@angular/http"
import { Friend } from "./friend"
import "rxjs"

const HEADERS = new Headers({"Content-Type": "application/json"})
const OPTIONS = new RequestOptions({headers: HEADERS})

@Injectable()
export class FriendsService {

  constructor(private http: Http) { }

  get_all_friends(){
	  return this.http.get("/friends")
	  	.map(data => data.json()).toPromise()
  }

  createFriend(friend: Friend){
	  return this.http.post("/friends", friend, OPTIONS).toPromise()
  }

  updateFriend(friend: Friend){
	  return this.http.put("/friends/" + friend._id, friend, OPTIONS).toPromise()
  }

  deleteFriend(friend: Friend){
	  return this.http.delete("/friends/" + friend._id, OPTIONS).toPromise()
  }

}
