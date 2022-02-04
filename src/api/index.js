import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import routes from "./routes";

const PORT = 3001;
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.json({ extended: true }));

app.use(
  morgan(":method :url  :req[header]  |   :response-time  |  :date[web]")
);
app.use("/ping", (req, res) => {
  res.status(200).json({
    appName: "API",
    version: process.env.npm_package_version,
    status: "Reallly good!!",
  });
});

app.use("/api/company", routes.company);

app.listen(PORT, (error) => {
  if (error) {
    console.log(`
    \n\n
    Server Listening!

    API:

    Status: Error
    Log: ${error}
    \n\n

    `);
  } else {
    console.log(`
    \n\n

    API server running on port ${PORT}

      \n\n
    `);
  }
});
