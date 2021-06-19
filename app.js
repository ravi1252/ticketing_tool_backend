const express = require('express')
const app = express()
const port = 4000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send({"msg" : "hello world"})
})

app.post('/login', (req, res) => {
	console.log("inside login : " + req.body + " : " + req.body);
	if(req.body.username == "" || req.body.password == "") {
		return res.send({
			"status" : "error",
			"message" : "Empty username or password"
		});
	}
	if(req.body.username != "raghu@myrepublic.com" || req.body.password != "raghu") {
		return res.send({
			"status" : "error",
			"message" : "Invalid username or password"
		});	
	}
	return res.send({
		"status" : "success",
		"message" : "Login is successful"
	});
});


app.post('/registration', (req, res) => {
	return res.send({
		"status" : "success",
		"message" : "Registration is successful"
	});
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})