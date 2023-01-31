const express = require("express");

const feedRoutes = require("./routes/feed");

const app = express();

// registramos la ruta para poder usarla con peticiones que empiecen por /feed
app.use("/feed", feedRoutes);

app.listen(3000);
