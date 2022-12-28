const User = require("../model/User");
const client = require("../bd/connect");

const addUser = async (req, res) => {
  try {
    const user = new User(req.body.name, req.body.adress, req.body.phone);
    const result = await client.bd().collection("User").insertOne(user);
    res.status(200).json(result);
  } catch (error) {
    console.log("error add user ", error);
    res.status(500).json(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const cursor = client.bd().collection("User").find();
    const result = await cursor.toArray();

    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(204).json({ message: "Users list is empty" });
    }
  } catch (error) {
    console.log("error get all user ", error);
    res.status(500).json(error);
  }
};

module.exports = { addUser, getUsers };
