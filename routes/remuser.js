/* 
 * A Bluemix application using  MongoDB & Node Express 
 * Developed by: Tinniam V Ganesh
 * Date: 06 Aug 2014
 * File: remuser.js
 */
exports.list = function(req, res){
  res.render('remuser', { title: 'Delete User'});
};
