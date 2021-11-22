const express = require('express');
const router = express.Router();
const menAppSchema = require('../Models/menappModel');

// Get All Record
router.get('/', async(req, res) => {
    try {
		const findMenApp = await menAppSchema.find();
        res.json(findMenApp);
		
    } catch(err) {
        res.send(500, "Error" + err.message);
    }
});

// Get specific record
router.get('/:id', async(req, res) => {
    try {
		const findMenAppSpecificUser = await menAppSchema.findById(req.param.id);
        res.json(findMenAppSpecificUser);
		
    } catch(err) {
        res.send(500, "Error" + err.message);
    }
});
router.post('/', async(req, res) => {
	const findMenApp = new menAppSchema({
		name: req.body.name,
		company: req.body.company,
		users: req.body.users
	});
	try {
		const abc = await findMenApp.save();
		res.json(abc);
	} catch(err) {
		res.send(500, "Error" + err.message);
	}
})
module.exports = router;