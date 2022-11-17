import Proprietario from '../models/proprietario.model.js';

async function insertProprietario(proprietario) {
  try {
    return await Proprietario.create(proprietario);
  } catch (err) {
    throw err;
  }
}

async function getProprietarios() {
  try {
    return await Proprietario.findAll();
  } catch (err) {
    throw err;
  }
}

async function getProprietario(id) {
  try {
    return await Proprietario.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function deleteProprietario(id) {
  try {
    await Proprietario.destroy({
      where: {
        proprietario_id: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function updateProprietario(proprietario) {
  try {
    await Proprietario.update(proprietario, {
      where: {
        proprietario_id: proprietario.proprietario_id,
      },
    });
    return await getProprietario(proprietario.proprietario_id);
  } catch (err) {
    throw err;
  }
}

export default {
  insertProprietario,
  getProprietarios,
  getProprietario,
  updateProprietario,
  deleteProprietario,
};
