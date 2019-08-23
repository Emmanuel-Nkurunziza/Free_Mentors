import express from 'express';
import users from '../models/db';
const router=express.Router();

router.get('/api/v1/users',(req,res)=>users);
export default router;