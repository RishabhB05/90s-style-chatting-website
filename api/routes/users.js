import Express from 'express';
const router = Express.Router();


router.get('/test', (req, res) => {
  res.send("This is the users route");
}); 



export default router;