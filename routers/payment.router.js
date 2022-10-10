const router = require('express').Router()
const CrmMiddleware = require('./../helpers/crm.middleware')
const PaymentController = require('./../controllers/payment.controller')
router.route('/').post(CrmMiddleware, PaymentController.addPayment).get(CrmMiddleware ,PaymentController.GetPayment)

module.exports = router;