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

exports.createFleet = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  // aquí se crearía el fleet en la base de datos
  res.status(201).json({
    message: "Fleet creado",
    data: {
      id: new Date().toISOString(),
      title: title,
      content: content,
    },
  });
};
