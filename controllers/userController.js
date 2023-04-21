import User from "../models/User.js";

const register = async (req, res) => {
    try{
        const user = new User(req.body);
        const userSave = await user.save(); 
        res.send(userSave);
    }catch(error){
        console.log(error);
    }
    
};

const getUsers = async (req, res) => {
    try{
        const allUsers = await User.find();
        res.json(allUsers);
    }catch(error){
        console.log(error);
    }
};

const deleteUser = async(req, res) => {
    try{
        //await User.findOneAndDelete(req.body.id);
        await User.findByIdAndDelete(req.body.id);
        res.json({msg: "Eliminado Correctamente"});
    }catch(error){
        console.log(error);
    }
}

export {
    register,
    getUsers,
    deleteUser
};