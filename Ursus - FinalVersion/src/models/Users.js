const fs = require("fs")
const path =  require('path')

// const usersPath = path.join(__dirname, '../data/users.json'); // requiero el modelo
// const users = JSON.parse(fs.readFileSync(usersPath, "utf-8")); //parseo

const User = {
   
   filename: path.join(__dirname, '../data/users.json'),
 
   getData: function () {
         return JSON.parse(fs.readFileSync(User.filename, 'utf-8'))
   },
    
   generateId: function () {
      let allUsers = this.findAll();
      let lastUser = allUsers.pop();
      
      if(lastUser) {
      return lastUser.id + 1
      }
      return 1;
   },
   
   findAll: function () {
         return this.getData()
   },
   
   findByPk: function (id) {
         let allUsers = this.findAll()
        
         let userFound = allUsers.find((user) => {
            return user.id === id
         })
    
         return userFound;
   },
    
   findByField: function (field, text) {
      let allUsers = this.findAll()
     
      let userFound = allUsers.find((user) => {
         return user[field] === text
      })
 
      return userFound;
},
   
   create: function (userData) {
      let allUsers = User.findAll();
      let newUser = {
         id: this.generateId(),
         ...userData
      }
      
      allUsers.push(newUser);
      fs.writeFileSync(this.filename, JSON.stringify(allUsers, null, ' '));
      return newUser;
   },

   delete: function() {
      let allUsers = this.findAll()
      let finalUsers = allUsers.filter(user => {
         return user.id !== id
      })
      fs.writeFileSync(this.filename, JSON.stringify(finalUsers, null, ' '));
      return true;
   }
}

module.exports = User;