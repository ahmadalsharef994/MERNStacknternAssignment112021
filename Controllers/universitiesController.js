const mongoose = require("mongoose");


const Universities = mongoose.model("universities");

// function for base route on "/"
exports.baseRoute = async (req, res) => {
  res.send("Server Running");
};

// function to get universities on route "/getUniversities"
exports.getUniversities = async (req, res) => {
  const universities = await Universities.find();
  res.json(universities)
};

// function to create a post
exports.createUniversity = async (req, res) => {
  // we use mongodb's save functionality here
  await new Universities(req.body).save((err, data) => {
    console.log("creating ...  "+req.body)
    console.log(err)
    if (err) {
      // if there is an error send the following response
      res.status(500).json({
        message:
          "Something went wrong, please try again later.",
      });
    } else {
      // if success send the following response
      res.status(200).json({
        message: "Universities Created",
        data,
      });
    }
  });
};

// function to delete a post from the DB
exports.deleteUniversity = async (req, res) => {
  let UniversityID = req.params.id;
  // we use mongodb's deleteOne() functionality here
  await Universities.deleteOne({ _id: UniversityID }, (err, data) => {
    console.log("Deleting ...  "+UniversityID)
    if (err) {
      res.status(500).json({
        message:
          "Something went wrong, please try again later.",
      });
    } else {
      res.status(200).json({
        message: "Post Deleted"
      });
    }
  });
};