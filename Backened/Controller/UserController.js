const User = require('../Model/User');


exports.CreateUser= async(req,res)=>{
    try{
    const user = new User(req.body);
    await user.save();
    console.log(user);
    return res.status(200).send(user);
  } catch (err){
    return res.status(500).send(err);
  }
};


exports.GetAllUser = async (req, res) => {
    try {
      const allData = await User.find();
      return res.status(200).send(allData);
    } catch (error) {
      return res.status(500).send(err);
    }
  };
  
  exports.GetUserbyId = async (req, res) => {
    try {
      const finder = await User.findById(req.params.id);
      return res.status(200).send(finder);
    } catch (err) {
      return res.status(500).send(err);
    }
  };
  
  exports.updateUser = async(req,res)=>{
      try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true})
        if(!user) return res.status(404).send("user not found")
        return res.status(200).send(user);
      }
      catch(err){
          return res.status(500).send(err);
  
      }
     
  };
  
  exports.deleteUser = async(req,res)=>{
      try{
          const user = await User.findByIdAndDelete(req.params.id);
          if(!user) return res.status(404).send("user not found");
            return res.status(200).send(data)
      }catch(err){
          return res.status(500).send(err)
      }
  
  }
