const express = require("express");
const router = express.Router();

const Model = require("./model");
const TasksModel = require("../tasks/model");
const ResourcesModel = require("../resources/model");

router.get("/", (req, res) => {
	Model.getAll()
		.then(result => {
			if (result) {
				res.json(result);
			} else {
				res.json({});
			}
		})
		.catch(err => {
			res.status(500).json({ message: "error" });
		});
});

router.post("/", (req, res) => {
	Model.insert(req.body)
		.then(result => {
			if (result) {
				res.json(result);
			} else {
				res.json({});
			}
		})
		.catch(err => {
			res.status(500).json({ message: "error" });
		});
});
router.put("/:id", (req, res) => {
	Model.update(req.params.id, req.body)
		.then(result => {
			if (result) {
				res.json(result);
			} else {
				res.json({});
			}
		})
		.catch(err => {
			res.status(500).json({ message: "err.message" });
		});
});
router.delete("/:id", (req, res) => {
	Model.deleteEntry(req.params)
		.then(result => {
			if (result) {
				res.json(result);
			} else {
				res.json({});
			}
		})
		.catch(err => {
			res.status(500).json({ message: "err.message" });
		});
});

module.exports = router;