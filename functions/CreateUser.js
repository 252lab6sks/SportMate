const admin = require('firebase-admin')

module.exports = function(req, res){



    //admin.auth().createUserWithEmailAndPassword(req.body.email,req.body.password).catch((err)=>
    admin.auth().createUserWithEmailAndPassword(req.body.email,req.body.password)
    .then(()=> res.send("USER CREATED!"))
    // .catch((err)=>{
    //    res.send("create user error")
    //    res.status(422).send({error: err})
    // })

    //Respond to user request, saying the account was made


}   


// try{

		// 	 axios.get('https://cors-anywhere.herokuapp.com/https://us-central1-sportmate-9e1cf.cloudfunctions.net/helloWorld',{
        // 		//  email: email,
		// 		//  password: password
     	// 	}).then(function (response) {
   		// 		 console.log("response! "+response.data);
  		// 	}).catch(error => {
		// 		console.log(error.response)
		// 	});


		// }catch(err){
        //  console.log("error "+err)
     	// }
		 
