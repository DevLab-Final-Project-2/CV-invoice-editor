const express = require('express')
const auth = require('../middlewares/auth')
const invoiceController = require('../controllers/invoice');

const invoiceCon = new invoiceController.InvoiceController();

const router = express.Router();

router.get('/invoices', auth, async (req, res) => {
	const invoices = await invoiceCon.findAll()
    res.status(200).send(invoices)
});
 
router.post('/create_invoice', auth, async (req, res) => {
    try {
        req.body.user_id = req.user._id
        const invoice = await invoiceCon.create(req.body)
        res.status(201).send({ invoice })
    } catch (error) {
        res.status(400).send({error: error.message})
    }
});


module.exports = router;




