var models = require('../models/models.js');

exports.list = function(req, res){
	var UserId= req.session.user.id;
	models.User.find({ where: { id: Number(UserId)}, include: [{ model: models.Quiz }] }).then(function(user){
		user.getQuizzes().then(function(quizes){
			res.render('quizes/favoritos/fav.ejs', {quizes: quizes, errors: []});
		});
//		models.Favourite.findAll({where: {UserId: UserId, favorito: true}}).then(function(favourites) {
	
//			res.render('quizes/favoritos/fav.ejs',{user: user, quizes: quizes, favourites: favourites, errors: []});
//		});
	});
};

exports.create = function(req, res){
var UserId = req.session.user.id;	
	models.User.find({where: { id: Number(UserId)}}).then(function(user){
		user.addQuiz(req.quiz, {favorito: true});
		res.redirect('/quizes');
	});
};

exports.destroy = function(req, res){
var UserId = req.session.user.id;	
	models.User.find({where: { id: Number(UserId)}}).then(function(user){
		user.removeQuiz(req.quiz, {favorito: false});
		res.redirect('/quizes');
	});
};