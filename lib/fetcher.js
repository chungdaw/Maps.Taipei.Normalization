function fetcher(options) {
	this.options = options;
}


fetcher.prototype.getObject = function() {

	var req = http.request(this.options, function(res) {
		res.setEncoding("utf8");
		res.on("data", function(chunk) {
			console.log("BODY:" + chunk);
		});
		res.on('end', function() {
			//TODO
		});
	});

	req.on("error", function(err) {
		console.log("problem with request: " + err.message);
	});

}


