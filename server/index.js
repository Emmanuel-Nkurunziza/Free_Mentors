import express from 'express';
import router from '../server/routes/routes';
const app = express();
import users from '../server/models/db';
app.get(`/`, (req,res) => {
    return res.status(200).send({
        status:200,
        message:"Welcome to Free Mentors"
    })
});
app.get('/api/v1/users',(req,res)=>{
    return res.status(200).send({
        data:users
    })
});
const port=3000;
app.listen(port,()=>(console.log(`app listening on port ${port}`)));
export default app;