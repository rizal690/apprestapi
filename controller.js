'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(red,res){
    response.ok("Aplikasi REST API ku berjalan!")
};
