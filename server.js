(function(){
    var express = require('express');
    var path = require('path');

    var app = express();
    app.set('port', process.env.PORT || 4000);

    app.use("/", express.static(path.join(__dirname, './public')));
    app.get("*", express.static(path.join(__dirname, './public/index.html'))); // returns index.html for any route not specified above.

    var server = app.listen(app.get('port'), function() {
        console.log('Express server listening on port ' + server.address().port);
    });

    module.exports = app;
})();