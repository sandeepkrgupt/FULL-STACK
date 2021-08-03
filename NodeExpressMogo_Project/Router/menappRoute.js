const express = require('express');
const router = express.Router();
const menAppSchemaExport = require('../Models/menappModel');

// Get All Record
router.get('/', async(req, res) => {
    try {
		const findMenApp = await menAppSchemaExport.find();
        res.json(findMenApp);
		
    } catch(err) {
        res.send("Error" + err);
    }
});

// Get specific record
router.get('/:id', async(req, res) => {
    try {
		const findMenAppSpecificUser = await menAppSchemaExport.findById(req.param.id);
        res.json(findMenAppSpecificUser);
		
    } catch(err) {
        res.send("Error" + err);
    }
});
router.post('/', async(req, res) => {
	const findMenApp = new menAppSchemaExport({
		techName: req.body.techName,
		companyName: req.body.companyName,
		users: req.body.users
	});
	try {
		const a1 = await findMenApp.save();
		res.json(a1);
	} catch(err) {
		res.send("Error", err);
	}
})
module.exports = router;