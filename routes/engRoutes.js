const express = require('express');
const engController = require('../controllers/engController');

const router = express.Router();

router.route('/').get(engController.getMainPage);
router.route('/about').get(engController.getAboutPage);
router.route('/mission-vision').get(engController.getMissionVisionPage);
router.route('/quality').get(engController.getQualityPage);
router.route('/certificates').get(engController.getCertificatesPage);
router.route('/ldpl').get(engController.getLdplPage);
router.route('/products-engine').get(engController.getProductsEnginePage);
router.route('/products-pump').get(engController.getProductsPumpPage);
router.route('/contact').get(engController.getContactPage);

module.exports = router;
