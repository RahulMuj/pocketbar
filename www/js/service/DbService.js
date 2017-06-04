app.factory('DbService',['$cordovaSQLite','$ionicPlatform','$q',function($cordovaSQLite,$ionicPlatform,$q){
		var db;
		return {
			initDB:initDB,
			getLoginDetails: getLoginDetails
			
		}

		function initDB() {
		  $ionicPlatform.ready(function() {
		  	if (window.cordova) {
      			db = $cordovaSQLite.openDB({ name: "myapp.db", location : "default" }); //device
   			 }else{
      				db = window.openDatabase("myapp.db", '1', 'myapp', 1024 * 1024 * 100); // browser
    		}

 

			var queryCreate = "CREATE TABLE IF NOT EXISTS user ( id INTEGER PRIMARY KEY   AUTOINCREMENT, mobile varchar , role integer DEFAULT 0, name varchar)";
			runQuery(queryCreate,[],function(res) {
			
				   }, function (err) {
			   console.log(err);
			    });

		//Create Product CategoryTable
		var queryCreate = "DROP TABLE category";
			runQuery(queryCreate,[],function(res) {
			
				   }, function (err) {
			   console.log(err);
			    });

		var queryCreate = "CREATE TABLE IF NOT EXISTS category ( category_id INTEGER PRIMARY KEY AUTOINCREMENT ,category_name varchar)";
			runQuery(queryCreate,[],function(res) {
			
				   }, function (err) {
			   console.log(err);
			    });

		//Insert Category Dummy Records
		var queryCreate = "INSERT INTO category ( category_id ,category_name) values (101,'Vodka')";
			runQuery(queryCreate,[],function(res) {
			
				   }, function (err) {
			   console.log(err);
			    });

		var queryCreate = "INSERT INTO category ( category_id ,category_name) values (102,'Whisky')";
			runQuery(queryCreate,[],function(res) {
			
				   }, function (err) {
			   console.log(err);
			    });
			    
		var queryCreate = "INSERT INTO category ( category_id ,category_name) values (103,'Tequila')";
			runQuery(queryCreate,[],function(res) {
			
				   }, function (err) {
			   console.log(err);
			    });	    	

		//Create Product Table
		var queryCreate = "DROP TABLE product";
			runQuery(queryCreate,[],function(res) {
			
				   }, function (err) {
			   console.log(err);
			    });
		var queryCreate = "CREATE TABLE IF NOT EXISTS product ( product_id INTEGER PRIMARY KEY , product_name varchar , product_price integer , product_crncy varchar)";
			runQuery(queryCreate,[],function(res) {
			
				   }, function (err) {
			   console.log(err);
			    });

		//Insert Dummy Products
		var queryCreate = "INSERT INTO product ( product_id  , product_name , product_price , product_crncy) values(201,'Smirnoff',200,'HKD')";
			runQuery(queryCreate,[],function(res) {
			
				   }, function (err) {
			   console.log(err);
			    });

		var queryCreate = "INSERT INTO product ( product_id  , product_name , product_price , product_crncy) values(202,'Absolut',250,'HKD')";
			runQuery(queryCreate,[],function(res) {
			
				   }, function (err) {
			   console.log(err);
			    });
			    
		var queryCreate = "INSERT INTO product ( product_id  , product_name , product_price , product_crncy) values(301,'Johnnie Walker',300,'HKD')";
			runQuery(queryCreate,[],function(res) {
			
				   }, function (err) {
			   console.log(err);
			    });	 

			  var queryCreate = "INSERT INTO product ( product_id  , product_name , product_price , product_crncy) values(302,'Chivas Regal',350,'HKD')";
			runQuery(queryCreate,[],function(res) {
			
				   }, function (err) {
			   console.log(err);
			    });
			    
			  var queryCreate = "INSERT INTO product ( product_id  , product_name , product_price , product_crncy) values(401,'Don Julio',400,'HKD')";
			runQuery(queryCreate,[],function(res) {
			
				   }, function (err) {
			   console.log(err);
			    });
			    
			  var queryCreate = "INSERT INTO product ( product_id  , product_name , product_price , product_crncy) values(402,'Calle 23',400,'HKD')";
			runQuery(queryCreate,[],function(res) {
			
				   }, function (err) {
			   console.log(err);
			    });
			             	


		//Create Order Table
			var queryCreate = "DROP TABLE bar_order";
			runQuery(queryCreate,[],function(res) {
			
				   }, function (err) {
			   console.log(err);
			    });
		
		var queryCreate = "CREATE TABLE IF NOT EXISTS bar_order ( order_id INTEGER PRIMARY KEY, product_id integer, product_name varchar,quantity integer, user_id integer ,order_date varchar,payment_status varchar,order_status varchar)";
			runQuery(queryCreate,[],function(res) {
			
				   }, function (err) {
			   console.log(err);
			    });

		//Insert Dummy Orders
		var queryCreate = "INSERT INTO bar_order ( order_id , product_id,product_name, quantity , user_id  ,order_date ,payment_status,order_status) values (1001,201,'Smirnoff',2,'DummyDrinkerUser1','02-06-2017','Done','In Progress')";
			runQuery(queryCreate,[],function(res) {
			
				   }, function (err) {
			   console.log(err);
			    });

		var queryCreate = "INSERT INTO bar_order ( order_id, product_id ,product_name, quantity, user_id  ,order_date,payment_status,order_status) values (1002,302,'Chivas Regal',5,'DummyDrinkerUser2','03-06-2017','Done', 'Done')";
			runQuery(queryCreate,[],function(res) {
			
				   }, function (err) {
			   console.log(err);
			    });

		var queryCreate = "INSERT INTO bar_order ( order_id, product_id , product_name, quantity, user_id  ,order_date,payment_status,order_status)  values(1003,303,'Johnnie Walker',5,'DummyDrinkerUser3','03-06-2017','Done', 'Done')";
			runQuery(queryCreate,[],function(res) {
			
				   }, function (err) {
			   console.log(err);
			    });
			    	
			    




		//Create Order History Table
		var queryCreate = "DROP TABLE order_history";
			runQuery(queryCreate,[],function(res) {
			
				   }, function (err) {
			   console.log(err);
			    });
			    	
		var queryCreate = "CREATE TABLE IF NOT EXISTS order_history ( order_id INTEGER PRIMARY KEY AUTOINCREMENT, product_name varchar, user_name varchar)";
			runQuery(queryCreate,[],function(res) {
			
				   }, function (err) {
			   console.log(err);
			    });

		var queryCreate = "INSERT into order_history ( order_id , product_name, user_name) values(1001,'Chivas Rega', 'DummyDrinkerUser1')";
			runQuery(queryCreate,[],function(res) {
			
				   }, function (err) {
			   console.log(err);
			    });	

		var queryCreate = "INSERT into order_history ( order_id , product_name, user_name) values(1002,'Johnnie Walker', 'DummyDrinkerUser2')";
			runQuery(queryCreate,[],function(res) {
			
				   }, function (err) {
			   console.log(err);
			    });	


			var queryUpdate = "REPLACE INTO user VALUES (1, '9999999999',1,'user');";
			runQuery(queryUpdate,[],function(res) {
			
				   }, function (err) {
			   console.log(err);
			    });
			   

		  }.bind(this));
		}

		function getLoginDetails(id){
			var deferred = $q.defer();
			var query = "SELECT * from user where role = ?";
			console.log("Role is "+id);
			runQuery(query,[id],function(response){
				//Success Callback
				if(response.rows.length==0){
					deferred.reject();
				}else{
					console.log(response);
					deferred.resolve(response);
				}
			},function(error){
				//Error Callback
				console.log(error);
				deferred.reject(error);
			});

			return deferred.promise;
		}
		function runQuery(query,dataArray,successCb,errorCb)
		{
		  $ionicPlatform.ready(function() {		  
			    $cordovaSQLite.execute(db, query,dataArray).then(function(res) {
			      successCb(res);
			    }, function (err) {
			      errorCb(err);
			    });
		  }.bind(this));
		}

	}
]);