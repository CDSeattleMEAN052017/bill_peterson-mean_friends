var mongoose = require('mongoose');
var Friend = mongoose.model("Friend");

module.exports = {
	index: function(req, res){
		Friend.find({}, function(err, friends){
			if(err){
				console.log("something went wrong");
                console.log(err);
                res.json(Friend.errors);
			}
			else{
				console.log("getting friends");
                console.log(friends);
                res.json(friends);
			}
		})
	},

	create: function(req, res){
		var friend = new Friend({first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday });
        friend.save(function(err){
            if(err){
                console.log("something went wrong");
                console.log(err);
                res.json(friend.errors);
            }
            else{
                console.log("person created");
                res.json(friend);
            }
        })
	},

	update: function(req, res){
		Friend.update({_id: req.params.id}, {$set: {first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday }}, function(err){
			if(err){
				console.log("something went wrong");
                console.log(err);
				res.json(Friend.errors)
			}
			else{
				console.log("friend updated");
				res.json(Friend);
			}
		})
	},

	delete: function(req, res){
		Friend.remove({_id: req.params.id}, function(err){
			if(err){
				console.log("something went wrong");
                console.log(err);
			}
			else{
				console.log("friend deleted");
			}
		})
	},

	show: function(req, res){
		Friend.findOne({_id: req.params.id}, function(err, friend){
			if(err){
				console.log("something went wrong");
                console.log(err);
			}
			else{
				console.log("getting friend");
                console.log(req.params.id);
                console.log(friend);
				res.json(friend);
			}
		})
	}
}
