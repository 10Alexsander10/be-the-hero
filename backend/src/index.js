const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); 
app.use(express.json());
app.use(routes);
/**
 * EM CASO DE PRODUÇÃO COLOCAR A HOSPEDAGEM:
 * app.use(cors({
 *  origin: 'http://meuapp.com'
 * })); 
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros,paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requeisição, usado pra criar ou alterar recursos
  */



app.listen(3333);