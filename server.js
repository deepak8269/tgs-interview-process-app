const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

const port = process.env.PORT || 3000;
const app = express();

if (process.env.NODE_ENV === "development") dotenv.config({ silent: true });

app.use(express.static(`${__dirname}/dist`));

app.get("*", (_req, res) => {
  res.sendFile(path.resolve(__dirname, "dist/index.html"));
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log("Application is up and running on port: ", port));
