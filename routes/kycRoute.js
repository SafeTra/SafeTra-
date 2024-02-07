const express = require ('express');
const router = express.Router();
const multer = require ('multer');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { handleKYC } = require('../controllers/kycCtrl');

const upload = multer ({dest: 'uploads/'});


router.post('/update-KYC/:id', authMiddleware, upload.single('photo'), handleKYC);


module.exports = router;


const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.post('/verify-bvn', async (req, res, next) => {
    try {
        const { bvn } = req.body;
        const apiKey = process.env.BVN_API_KEY; 

        const apiUrl = `https://api.bvnverification.com/verify?bvn=${bvn}&api_key=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === 'success') {
          
            res.status(200).json({ success: true, data: data.data });
        } else {
        
            res.status(400).json({ success: false, message: data.message });
        }
    } catch (error) {
        
        next(error);
    }
});

module.exports = router;


