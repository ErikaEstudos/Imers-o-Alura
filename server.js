import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads")); //TUDO QUE TIVER DENTRO DA PASTA VAI APARECER
routes(app); //SERVIR ARQUIVOS ESTÁTICOS

app.listen(3000, () => {
  console.log("Servidor escutando...");
});
