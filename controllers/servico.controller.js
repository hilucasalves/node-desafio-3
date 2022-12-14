import ServicoService from '../services/servico.service.js';

async function createServico(req, res, next) {
  try {
    let servico = req.body;
    if (!servico.descricao || !servico.valor || !servico.animal_id) {
      throw new Error('Descrição, Valor e Animal ID são obrigatórios.');
    }
    servico = await ServicoService.createServico(servico);
    res.send(servico);
    logger.info(`POST /servico - ${JSON.stringify(servico)}`);
  } catch (err) {
    next(err);
  }
}

async function getServicos(req, res, next) {
  try {
    res.send(await ServicoService.getServicos(req.query.proprietario_id));
    logger.info('GET /servico');
  } catch (err) {
    next(err);
  }
}

async function getServico(req, res, next) {
  try {
    res.send(await ServicoService.getServico(req.params.id));
    logger.info('GET /servico');
  } catch (err) {
    next(err);
  }
}

async function deleteServico(req, res, next) {
  try {
    await ServicoService.deleteServico(req.params.id);
    res.end();
    logger.info('DELETE /servico');
  } catch (err) {
    next(err);
  }
}

async function updateServico(req, res, next) {
  try {
    let servico = req.body;
    if (
      !servico.servico_id ||
      !servico.descricao ||
      !servico.valor ||
      !servico.animal_id
    ) {
      throw new Error(
        'Servico ID, Descrição, Valor e Animal ID são obrigatórios.'
      );
    }
    servico = await ServicoService.updateServico(servico);
    res.send(servico);
    logger.info(`PUT /servico - ${JSON.stringify(servico)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createServico,
  getServicos,
  getServico,
  deleteServico,
  updateServico,
};
