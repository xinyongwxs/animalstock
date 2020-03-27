import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
// import bodyParser from 'body-parser';
import logger from "morgan";
import indexRouter from "./routes";
import proxy from "express-http-proxy";
import compression from "compression";

const app = express();

app.use(logger("dev"));
app.use(express.json({ type: "application/json" }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false}));

// parse application/json
// app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../dist")));
console.log(path.join(__dirname, "../dist"));
// app.disable('etag');
app.use("/", indexRouter);
app.use(
  "/",
  proxy("bots-api-dashboard-prod-2nmteknehj.cn-north-1.eb.amazonaws.com.cn", {
    // https: false,
    // proxyReqOptDecorator: proxyReqOpts => {
    //     proxyReqOpts.rejectUnauthorized = false;
    //     return proxyReqOpts;
    // }
  })
);
export default app;
