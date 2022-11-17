import Animal from '../models/animal.model.js';
import Proprietario from '../models/proprietario.model.js';

async function insertAnimal(animal) {
  try {
    return await Animal.create(animal);
  } catch (err) {
    throw err;
  }
}

async function getAnimais() {
  try {
    return await Animal.findAll();
  } catch (err) {
    throw err;
  }
}

async function getAnimaisByProprietarioId(proprietario_id) {
  try {
    return await Animal.findAll({
      where: {
        proprietario_id,
      },
      include: [
        {
          model: Proprietario,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function getAnimal(id) {
  try {
    return await Animal.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function deleteAnimal(id) {
  try {
    await Animal.destroy({
      where: {
        animal_id: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function updateAnimal(animal) {
  try {
    await Animal.update(animal, {
      where: {
        animal_id: animal.animal_id,
      },
    });
    return await getAnimal(animal.animal_id);
  } catch (err) {
    throw err;
  }
}

export default {
  insertAnimal,
  getAnimais,
  getAnimaisByProprietarioId,
  getAnimal,
  updateAnimal,
  deleteAnimal,
};
