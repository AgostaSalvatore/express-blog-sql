const express = require("express");
const app = express();
const port = 3000;

//listen
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
