/* 
 * A Bluemix application using  MongoDB & Node Express 
 * Developed by: Tinniam V Ganesh
 * Date: 06 Aug 2014
 * File: newuser.js
 */

exports.list = function(req, res){
  res.render('newuser', { title: 'Add User'});
};

