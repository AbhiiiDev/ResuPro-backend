const Resume = require("../models/resume");

const uploadResume = async (req, res) => {
  try {
    const { cloudinaryUrl, fileSize } = req.body;

    if (!cloudinaryUrl || !fileSize) {
      return res.status(400).json({ message: "Cloudinary URL and file size are required" });
    }

    const resume = new Resume({
      userId: req.user.id,
      cloudinaryUrl,
      fileSize,
    });

    await resume.save();
    res.status(201).json({ message: "Resume saved successfully", resume });
  } catch (error) {
    res.status(500).json({ message: "Failed to save resume", error: error.message });
  }
};

module.exports = { uploadResume };
