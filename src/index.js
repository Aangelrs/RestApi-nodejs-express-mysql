import app from "./app.js";

const main=() =>{
    let port = app.get("port");
    app.listen(app.get("port"));
    console.log('Serve on port ' + port );
};

main();