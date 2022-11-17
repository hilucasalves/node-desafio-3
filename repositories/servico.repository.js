import Servico from '../models/servico.model.js';
import Animal from '../models/animal.model.js';
import Proprietario from '../models/proprietario.model.js';

async function insertServico(servico) {
  try {
    return await Servico.create(servico);
  } catch (err) {
    throw err;
  }
}

async function getServicos() {
  try {
    return await Servico.findAll();
  } catch (err) {
    throw err;
  }
}

async function getServicosByProprietarioId(proprietario_id) {
  try {
    return await Servico.findAll({
      include: [
        {
          model: Animal,
          where: {
            proprietario_id,
          },
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function getServico(id) {
  try {
    return await Servico.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function deleteServico(id) {
  try {
    await Servico.destroy({
      where: {
        servico_id: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function updateServico(servico) {
  try {
    await Servico.update(servico, {
      where: {
        servico_id: servico.servico_id,
      },
    });
    return await getServico(servico.servico_id);
  } catch (err) {
    throw err;
  }
}

export default {
  insertServico,
  getServicos,
  getServicosByProprietarioId,
  getServico,
  updateServico,
  deleteServico,
};
