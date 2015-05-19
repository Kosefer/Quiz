var models = require('../models/models.js');

// GET /quizes/statistics
exports.statistics = function(req, res) {
	var num_preguntas, num_comentarios, preguntas_commented, comentada, id;

	models.Quiz.findAll({include: [{model: models.Comment}]}).then(function(quizes){
		num_preguntas = 0;
		num_comentarios = 0;
		preguntas_commented = 0;
		for (var i = 0; i <  quizes.length; i++) {
			num_preguntas++;
			comentada = 0;

			for(index in quizes[i].Comments){
				num_comentarios++;
				comentada=1;
			}
			if(comentada)
				preguntas_commented++;
		}
		res.render('statistics/statistics.ejs', {num_preguntas: num_preguntas, num_comentarios: num_comentarios, 
		preguntas_commented: preguntas_commented, errors: []});
	});
};
