const connect = require("connect");
const serveStatic = require("serve-static");

const port = 9090;
const app = connect();

app.use(serveStatic(__dirname + "/public"));
app.listen(9090, function() {
    console.log("http server running on " + port);
});