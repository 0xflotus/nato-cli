"use strict";
const nato = require("nato");
process.argv.slice(2).forEach((val, index) => {
    console.log(new nato(val.toLowerCase()).natified
        .map((e) => e.text)
        .join(" "));
});
//# sourceMappingURL=index.js.map