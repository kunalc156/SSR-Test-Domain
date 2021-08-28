const mongoose = require("mongoose");

//create mongo DB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ssrtest", { 
    useNewUrlParser: true
});
