import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  'postgres://urwipqsl:iDk8iskX7vS2BeAFdlOMrTAC8lS64tiF@babar.db.elephantsql.com/urwipqsl',
  {
    dialect: 'postgres',
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
