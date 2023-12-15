const express = require('express');
const router = express.Router();

router.get('/api/people', (req, res)=>{
    res.status(200).json({success: true, data: people})
})
router.post('/api/people', (req, res)=>{
    const {name } = req.body;
    if(!name){
        return res.status(400).json({success: false, msg: 'please provide name value'})
    }
    res.status(201).send('Success')
})
router.delete('/api/people/:id', (req, res)=>{
    const person = people.find((person) => person.id === Number(req.params.id))
    if(!person){
        return res
            .status(404)
            .json({success: false, msg: `no person with id: ${req.params.id}`})
    }
    const newPeople = people.filter((person) => person.id != Number(req.params.id))
    return res.status(200).json({success: true, data: newPeople})
})
module.exports = router;