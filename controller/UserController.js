const User = require("../model/User");
const client = require("../bd/connect");
const { ObjectID } = require("bson");

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

const getAllUsers = async (req, res) => {
  try {
    const cursor = client.bd().collection("User").find();
    const result = await cursor.toArray();

    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(204).json({ message: "Users list is empty" });
    }
  } catch (error) {
    console.log("error get all users", error);
    res.status(500).json(error);
  }
};

const getUser = async (req, res) => {
  try {
    const id = new ObjectID(req.params.id);
    const cursor = client.bd().collection("User").find({ _id: id });
    const result = await cursor.toArray();

    if (result.length > 0) {
      res.status(200).json(result[0]);
    } else {
      res.status(204).json({ message: "User does not exist" });
    }
  } catch (error) {
    console.log("error in get user ", error);
    res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const id = new ObjectID(req.params.id);
    await client
      .bd()
      .collection("User")
      .updateOne(
        { _id: id },
        {
          $set: {
            name: req.body.name,
            adress: req.body.adress,
            phone: req.body.phone,
          },
        }
      );
    res
      .status(200)
      .json({ success: true, message: "User updated successfully" });
  } catch (error) {
    console.log("error in update user ", error);
    res.status(500).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = new ObjectID(req.params.id);
    await client.bd().collection("User").deleteOne({ _id: id });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log("error in delete user ", error);
    res.status(500).json(error);
  }
};

module.exports = { addUser, getAllUsers, getUser, updateUser, deleteUser };
