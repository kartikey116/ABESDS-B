function dosomething() {
    throw new Error("Something went wrong");
}

function init(){
    try {
        dosomething();
    } catch (error) {
        console.log(error);
    }
    console.log("Done");
}

init();