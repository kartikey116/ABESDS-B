import fs from "fs";

fs.readFile("file.txt", function(err , dat){
    if(err){
        console.log(err);
    }
    else{
        console.log(dat.toString());
    }
});

fs.readFile("mytext.txt", function(err , dat){
    if(err){
        console.log(err);
    }
    else{
        console.log(dat.toString());
    }
});

fs.readFile("config.json", function(err , dat){
    if(err){
        console.log(err.message);
        return;
    }
    else{
        const config = JSON.parse(dat);
        console.log("Config is ", config);
    }
    console.log("Done");
})
