const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const PORT = 3001;

/********************************* middlewares ******************************************/

app.use(cors()); /* for CORS support */
app.use(express.json()); /* express.json() is used for request body parsing */
app.use("/", routes); /* all routes are in routes.js file */

/****************************************************************************************/

app.listen(PORT, () => console.log(`>>> server is running on port ${PORT}`));
