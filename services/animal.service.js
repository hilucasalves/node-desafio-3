import AnimalRepository from '../repositories/animal.repository.js';

async function createAnimal(animal) {
  return await AnimalRepository.insertAnimal(animal);
}

async function getAnimais(proprietario_id) {
  if (proprietario_id) {
    return await AnimalRepository.getAnimaisByProprietarioId(proprietario_id);
  }
  return await AnimalRepository.getAnimais();
}

async function getAnimal(id) {
  return await AnimalRepository.getAnimal(id);
}

async function deleteAnimal(id) {
  await AnimalRepository.deleteAnimal(id);
}

async function updateAnimal(animal) {
  return await AnimalRepository.updateAnimal(animal);
}

export default {
  createAnimal,
  getAnimais,
  getAnimal,
  deleteAnimal,
  updateAnimal,
};
