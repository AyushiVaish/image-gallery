const express = require('express')
const app = express()
const cors = require('cors')
const request = require('request')

app.use(cors({origin:true}))

app.get('/:place', (req, res,next) => {
    var options = {
        url:`https://api.gettyimages.com/v3/search/images?phrase=${req.params.place}`,
        headers: {
			'User-Agent' : 'My Web Server' ,
            'content-type': 'application/json',
			'Api-Key': "nfw472v3usgdu7ep3ekepep5"
        }
    };
    function callback(error, response, body) {
        if(!error && response.statusCode === 200) {
            res.send(JSON.parse(body));
            return
        }
       else res.send ({
		   message: "Something went wrong"
	   });
	}
	   request(options, callback);
});	 
app.listen(5000)