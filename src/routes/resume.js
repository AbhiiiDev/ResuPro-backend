const express = require("express");
const protect = require("../middlewares/authMiddleware");
const { uploadResume } = require("../controllers/resumeController");

const router = express.Router();
router.post("/upload", protect, uploadResume); // No Multer, just JSON body

module.exports = router;
