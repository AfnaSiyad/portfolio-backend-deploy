const express = require("express");
const { contactInfo } = require("../controllers/userController");
const router = express.Router();

router.route('/contact').post(contactInfo);


module.exports = router;