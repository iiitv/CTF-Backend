const login = require('./login');
const signup = require('./signup');
const verification = require('./verification');
const resetPassword = require('./resetPassword')
const forgotPassword = require('./forgotPassword')
const changePassword = require('./changePassword')

module.exports = { login, signup, verification, resetPassword, forgotPassword, changePassword };

