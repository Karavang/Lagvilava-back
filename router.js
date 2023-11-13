const { Router } = require("express");
const sendForm = require("./sendForm");
const router = new Router();

router.post("/modal", sendForm);
module.exports = router;
