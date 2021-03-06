/*!
*Message
*@brief This is the mysql interface used to check whether the sign in is correct
*		It will use the username and
*@author Jack<wang_kejie@foxmail.com>
*@copyright(c) 2016 Jack
*/
client = require("./connPool");

exports.signInAuth = function(userName, password, callback){
	var sql = "SELECT * FROM User WHERE "
	 		+ "userName=" + "\'" + userName + "\' AND "
			+ "password=" + "\'" + password + "\';"

	client.query(sql, (err, vals)=>{
		if(err){
			console.log(err.message);
		}
		return callback(vals);
	});
}

exports.setState = function(userName, callback){
	var sql = "UPDATE User SET state = 1 WHERE userName = \'" + userName + "\';";

	client.query(sql, (err, vals)=>{
		if(err){
			console.log(err.message);
		}
		return callback(vals);
	});
}
