var cheerio = require('cheerio');
var request = require('request');

module.exports = function (app, express) {


	app.get('/Pharmaceutical' , function(req,res) {
		request('http://www.medicaltenders.com/search.php?t=&notice_type_new%5B%5D=1%2C2%2C3%2C7%2C10%2C11%2C16&sector=1801&competition=1&day=0&mon=0&year=0&deadline=select', function(error, response, body) {
			if(error){ console.log('error' + error)}

				var $ = cheerio.load(body)

			var trnd = $('fieldset .cent table').html();

			res.json(trnd);
		});
	})

		//healthcare and medicine
		app.get('/healthcare' , function(req,res) {
			request('http://www.medicaltenders.com/search.php?t=&notice_type_new%5B%5D=1%2C2%2C3%2C7%2C10%2C11%2C16&sector=18&competition=1&day=0&mon=0&year=0', function(error, response, body) {
				if(error){ console.log('error' + error)}

					var $ = cheerio.load(body)

				var trnd = $('fieldset .cent table').html();

				res.json(trnd);
			});
		})

		//Equipment
		app.get('/Equipment' , function(req,res) {
			request('http://www.medicaltenders.com/search.php?t=&notice_type_new%5B%5D=1%2C2%2C3%2C7%2C10%2C11%2C16&sector=1802&competition=1&day=0&mon=0&year=0', function(error, response, body) {
				if(error){ console.log('error' + error)}

					var $ = cheerio.load(body)

				var trnd = $('fieldset .cent table').html();

				res.json(trnd);
			});
		})

		//Laboratory 
		app.get('/Laboratory' , function(req,res) {
			request('http://www.medicaltenders.com/search.php?t=laboratory&notice_type_new%5B%5D=1%2C2%2C3%2C7%2C10%2C11%2C16&sector=08&competition=0&day=0&mon=0&year=0&deadline=select', function(error, response, body) {
				if(error){ console.log('error' + error)}

					var $ = cheerio.load(body)

				var trnd = $('fieldset .cent table').html();

				res.json(trnd);
			});
		})
	};

