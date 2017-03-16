'use strict';

process.title = 'Bag O Loot';

const { argv : [,, ...args] } = process;
const { getToysByChild, addToy, removeToy, getChildList, markDelivered } = require('./bagsorter');

const { db } = require('./createdb.js');
const { createTable } = require('./createtable')
