import express from "express";
import path from "path";
/*eslint-disable*/
import regeneratorRuntime from "regenerator-runtime";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

export default router;
