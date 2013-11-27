var http = require('http');

http.createServer(
    function(req, res) {
        res.writeHead('Content-Type', 'text/html');
        res.write('chunk1\n');

        setTimeout(function() {
            res.write('chunk2\n');
            res.end('done\n');
        }, 200);

        res.write('chunk3\n');
    }
).listen(8751);

