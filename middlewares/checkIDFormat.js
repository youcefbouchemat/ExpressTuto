const validateIDFormat = (req, res, next) => {
  const IDlength = req.params.id?.length;
  if (IDlength == 12 || IDlength == 24) {
    next();
  } else {
    return res.status(422).json({ message: "Bad Id format" });
  }
};
module.exports = validateIDFormat;
