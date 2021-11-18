const { v4: uuidv4 } = require('uuid');

let users = []

const getUsers = (req, res)=>{
    res.send(users)
}


const createUser = (req, res) =>{
    const user = req.body
    users.push({ ...user, id: uuidv4()})
    res.send(`User with the name ${user.firstname} has been created`)
}

const getUser = (req, res) =>{
    const { id } = req.params
    
    const foundUser = users.find((user) => user.id == id)
    
    res.send(foundUser)
}

const deleteUser = (req, res) =>{
    const { id } = req.params

    users = users.filter((user) => user.id !== id)
    
    res.send(`User with this ${id} is deleted from the Database`)
}
const updateUser = (req, res) =>{
    const { id } = req.params
    const{firstname, lastname, age} = req.body

    const user = users.find((user) => user.id == id)

    if (firstname){
        user.firstname = firstname;
    }
    if (lastname){
        user.lastname = lastname;
    }
    if (age){
        user.age = age;
    }

    res.send(`User with this ${id} is updated Successfully `)
}


module.exports = {getUsers, createUser, getUser, deleteUser, updateUser}