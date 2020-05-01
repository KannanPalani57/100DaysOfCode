const express = require("express");
const router = express.Router();
const members = require("../../Member")
router.get("/", (req,res) => {
    res.json(members);
})
router.get('/:id', (req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
    res.send(members.filter(member => member.id === parseInt(req.params.id)));
    }else{
        res.status(400).json({msg: "Member not found"})
    }})
router.post('/', (req,res)=>{
 const newMember = {
     name: req.body.name,
     email: req.body.email  }
 if(!newMember.name || !newMember.email){
     res.status(400).json({msg:"Please include the Name or Email"})
 }
 members.push(newMember);
 console.log(req.body);
  res.json(members);
})




router.put('/:id', (req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
      members.forEach(member => {
          if(member.id === parseInt(req.params.id)){
            member.name = req.body.name,
            member.email = req.body.email,
           
            res.json({msg: "Member Updated", member: member})
        }
      })
    }else{
        res.status(400).json({msg: "Member not found"})
    }
})
router.delete('/:id', (req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
     res.json({msg: "The member has Deleted", members: members.filter(member => member.id !== 
        parseInt(req.params.id)) })
    }else{
        res.status(400).json({msg: "Member not found"})
    }
})



module.exports = router;