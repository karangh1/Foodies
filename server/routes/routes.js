import express from 'express'
import { register } from '../controller/user.js';
import { postOrder, updateOrder, getOrder } from '../controller/order.js';
const router=express.Router();

router.post('/register',register)
// router.post('/login')
 router.post('/postOrder',postOrder)
 router.put('/updateOrder/:_id',updateOrder)
 
 router.get('/getOrder',getOrder)
 
// router.get('/getBill')
// router.post('/postWaiter')


export default router;