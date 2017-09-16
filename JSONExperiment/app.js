"use strict";
let myRequest = fetch("json.json");
myRequest.then(response => {
    return response.json();
}).then((json) => {
    console.log(json.Str);
});
//# sourceMappingURL=app.js.map