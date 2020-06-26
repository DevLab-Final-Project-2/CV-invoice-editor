const express = require('express')
const auth = require('../middlewares/auth')
const cvController = require('../controllers/cv');
const multer = require("multer");
const path = require("path");

const cvCon = new cvController.CvController();
const cv_filedsCon = new cvController.Cv_filedsController();

const router = express.Router()

router.get('/cvs', auth, async (req, res) => {
    const cvs = await cvCon.findAll({user_id:req.user._id})
    res.status(200).send(cvs)
  })

router.post('/create_cv', auth, async (req, res) => {
    try {
        req.body.user_id = req.user._id
        const cv = await cvCon.create(req.body)
        res.status(201).send({ cv })
    } catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.get('/cv_fields/:cv_id', auth, async (req, res) => {
    try {
    var cv_id = req.params.cv_id;
    const cv_fields = await cv_filedsCon.findAll({cv_id:cv_id})
    res.status(200).send(cv_fields)
    } catch (error) {
    res.status(400).send({error: error.message})
    }
  })

router.post('/save_cv_fields', auth, async (req, res) => {
    try {
        const cv_id = req.body.cv_id
        await cv_filedsCon.deleteMany({cv_id:cv_id}) // first we delete old fields then save new ones
        let fields = req.body.fields
        let saved_fields=[];
        for(let i=0; i<fields.length; i++){
            fields[i].cv_id = cv_id;
            saved_fields.push( await cv_filedsCon.create(fields[i]) );
        }
        res.status(201).send({ saved_fields })
    } catch (error) {
        res.status(400).send({error: error.message})
    }
})


const storage = multer.diskStorage({
    destination: './uploads/images',
    filename: function (req, file, callback) {
        callback(null, Date.now() +  path.extname(file.originalname));
      }});
const upload = multer({ storage: storage });

router.post('/save_cv_photo', auth, upload.single('photo') , async (req, res) => {
    if(req.file) {
        res.json(req.file);
    }
    else{
        res.status(400).send({error: "not uploaded"});
    }
})

module.exports = router