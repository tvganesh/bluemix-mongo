
/* 
 * A Bluemix application using  MongoDB & Node Express 
 * Developed by: Tinniam V Ganesh
 * Date: 06 Aug 2014
 * File: index.js
 */
exports.index = function(req, res){
  res.render('index', { title: 'A Bluemix app with Node Express & Mongo' });
};

