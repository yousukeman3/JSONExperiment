"use strict";

let myRequest = fetch("https://raw.githubusercontent.com/yousukeman3/JSONExperiment/master/JSONExperiment/json.json");
myRequest.then(response => {
    return response.json();
}).then((json) => {
    console.log(json.myStr);
})
