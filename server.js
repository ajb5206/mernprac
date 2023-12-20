const express = require('express');
const app = express()

app.listen(8000, function() {
	console.log('listening on 8000')
})

app.get('/', (req, res) => {
	res.sendFile("/Users/alexbertotto/Desktop/javascript practice/mern_prac" + '/index.html')
})

