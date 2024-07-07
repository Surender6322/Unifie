'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Category, { as: 'subcategories', foreignKey: 'parentId' });
      Category.belongsTo(models.Category, { as: 'parent', foreignKey: 'parentId' });
    }
  }
  Category.init({
    name: DataTypes.STRING,
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Categories',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
