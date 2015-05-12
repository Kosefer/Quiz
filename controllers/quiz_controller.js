var models = require('../models/models.js');

//GET /quizes
exports.index = function(req, res) {
	var search = req.query.search;
	if(search === undefined){
		search = "texto_a_buscar";
	}
	search = search.replace(' ', '%');
	console.log(search);
	models.Quiz.findAll({where: ["pregunta like ?", '%'+search+'%']}).then(function(quizes, search) {

		res.render('quizes/index.ejs', { quizes: quizes, search: search});
	})
};

// GET /quizes/:id

exports.show = function(req, res) {
	models.Quiz.find(req.params.quizId).then(function(quiz) {
		res.render('quizes/show', {quiz: quiz});
	})
};

// GET /quizes/:id/answer
exports.answer = function(req, res) {
	models.Quiz.find(req.params.quizId).then(function(quiz) {
		if (req.query.respuesta === quiz.respuesta) {
			res.render('quizes/answer', 
				{quiz: quiz, respuesta: 'Correcto'});
		} else {
			res.render('quizes/answer',
				{quiz: quiz, respuesta: 'Incorrecto'});
		}
	})
};

// GET /quizes/author

exports.author= function(req,res){
	res.render('author/index.ejs',{});
};