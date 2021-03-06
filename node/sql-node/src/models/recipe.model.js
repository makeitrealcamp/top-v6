module.exports = (sequelize, DataTypes) => {
  const recipeSchema = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    }
  }

  const recipeOps = {
    timestamps: true,
    tableName: 'recipes'
  }

  const Recipe = sequelize.define('Recipe', recipeSchema, recipeOps)

  Recipe.associate = (db) => {
    db.Recipe.belongsTo(db.User);
    // db.Recipe.belongsToMany(db.User, { through: 'UserRecipe' })
  }

  return Recipe
}
