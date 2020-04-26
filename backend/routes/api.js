const express = require("express");
const router = express.Router();

router.post("/textUpload", (req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send("No content or file was sent.");
    } else if (req.body.agb != null) {
        try {
            var hints = ['schaden', 'verbindlich', 'kosten', 'pflicht', 'haftung'];
            var agb = req.body.agb.split(/[?.!]/);
            console.log(agb);
            var dangerousLines = [];

            agb.forEach(line => {
                hints.forEach(hint => {
                    if (line.toLowerCase().includes(hint)) {
                        dangerousLines.push({
                            "line": line,
                            "danger": hint
                        });
                    }
                })
            });

            res.status(200).send(dangerousLines);
        } catch (error) {
            res.status(400).send("An error occurred while analyzing your text.");
        }
    } else {
        res.status(200).send("Everything's alright bby")
    }
});

module.exports = router;