import {Routes, RouterModule} from "@angular/router";
import { FriendsComponent } from "./friends/friends.component";
import { FriendsNewComponent } from "./friends/friends-new/friends-new.component";
import { FriendsListComponent } from "./friends/friends-list/friends-list.component";
import { FriendsEditComponent } from "./friends/friends-edit/friends-edit.component";
import { FriendsDetailsComponent } from "./friends/friends-details/friends-details.component";

const APP_ROUTES: Routes = [

	{ path: "", redirectTo: "/list", pathMatch: "full"},
	{ path: "list", component: FriendsListComponent},
	{ path: "new", component: FriendsNewComponent},
	{ path: "edit/:id/:first_name/:last_name/:birthday", component: FriendsEditComponent},
	{ path: "show/:id/:first_name/:last_name/:birthday", component: FriendsDetailsComponent }
];
export const routing = RouterModule.forRoot(APP_ROUTES);
