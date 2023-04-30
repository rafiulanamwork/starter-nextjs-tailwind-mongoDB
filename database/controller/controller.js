/** Controller */

 import Users from '../modal/user.modal.js'


 //get all user: http://localhost:3000/api/users
 export async function getUsers(req, res){
   try {
     const users = await Users.find({})

     if(!users) return res.status(404).json( {error: "Data not Found"})
     res.status(200).json(users)
   }
    catch (error){
     res.status(404).json( {error : "Error While Fetching Data"})
     }
    }

 //get single user: http://localhost:3000/api/users/1
    export async function getUserById(req, res) {
        try {
          const { userId } = req.query;
      
          const user = await Users.findById(userId);
      
          if (!user) {
            return res.status(404).json({ error: "User not found...!" });
          }
      
          return res.status(200).json(user);
        } catch (error) {
          return res.status(404).json({ error });
        }
      }
      

//post: http://localhost:3000/api/users
export async function postUser(req, res) {
    try {
      const formData = req.body;
  
      if (!formData) {
        return res.status(404).json({ error: "Form Data Not Provided...!" });
      }
  
      const user = await Users.create(formData);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(404).json({ error });
    }
  }

  //put: http://localhost:3000/api/users/1
  export async function updateUser(req, res) {
    try {
      const { userId } = req.query;
      const formData = req.body;
  
      if (!formData) {
        return res.status(404).json({ error: "Form Data Not Provided...!" });
      }
  
      const updatedUser = await Users.findByIdAndUpdate(userId, formData, {
        new: true,
      });
  
      if (!updatedUser) {
        return res.status(404).json({ error: "User not found...!" });
      }
  
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(404).json({ error });
    }
  }
  
 //delete: http://localhost:3000/api/users/1
  export async function deleteUser(req, res) {
    try {
      const { userId } = req.query;
  
      const deletedUser = await Users.findByIdAndDelete(userId);
  
      if (!deletedUser) {
        return res.status(404).json({ error: "User not found...!" });
      }
  
      return res.status(200).json(deletedUser);
    } catch (error) {
      return res.status(404).json({ error });
    }
  }
  