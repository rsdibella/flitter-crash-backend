// exportar modelo de fleet (temporal, con dummy data)
exports.getFleets = (req, res, next) => {
  res.status(200).json({
    id: 1,
    id_user: 1,
    timestamp: "1",
    message: "hello world",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/640px-Cat03.jpg",
  });
};
