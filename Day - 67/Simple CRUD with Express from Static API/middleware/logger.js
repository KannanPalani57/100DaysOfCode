const logger = (req,res,next)=>{
    console.log(`${req.protocol}`);
    next();
}

module.exports = logger;