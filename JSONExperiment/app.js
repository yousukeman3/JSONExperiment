"use strict";
let myRequest = fetch("json.json");
myRequest.then(response => {
    return response.json();
}).then((json) => {
    console.log(json.myStr);
});
//# sourceMappingURL=app.js.map