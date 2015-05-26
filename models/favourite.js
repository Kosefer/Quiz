//Definición del modelo Favourites

module.exports = function(sequelize, DataTypes) {
	return sequelize.define(
		'Favourites', 
		{ 	favorito: { 
				type: DataTypes.BOOLEAN,
				defaultValue: false
		  }
		} 
	);
}