import Sequelize from 'sequelize';
import db from '../repositories/db.js';

const Proprietario = db.define(
  'proprietarios',
  {
    proprietario_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

export default Proprietario;
