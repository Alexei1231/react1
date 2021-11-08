const express = require("express");
const router = express.Router();


const BookController = require("./controllers/bookController");
router.get("/api/entities", BookController.get);
router.post("/api/entities", BookController.post);
router.put("/api/entities", BookController.put);
router.delete("/api/entities", BookController.delete);


const HumanController = require("./controllers/humanController");
router.get("/api/entities", HumanController.get);
router.post("/api/entities", HumanController.post);
router.put("/api/entities", HumanController.put);
router.delete("/api/entities", HumanController.delete);


module.exports = router;
