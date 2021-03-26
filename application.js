const express = require('express');
request = require('request');
const app = express();
const cors = require('cors');
app.use(cors());

var url = "https://jsonplaceholder.typicode.com/todos/"

app.use(express.json());
app.use(express.urlencoded({extended: false}));
 
app.get('/users', function(req, res) {
request({
    url: url,
    json: false
}, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        res.send(body) 
            }
    })
});
app.get('/users/:id', function(req, res) {
    var itemId = req.params.id;
    request({
        url: url+itemId,
        json: false
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            // Pintamos la respuesta JSON en navegador.
            res.send(body) 
        }
    })
})
var server = app.listen(8888, function () {
    console.log('Server is running..'); 
});
