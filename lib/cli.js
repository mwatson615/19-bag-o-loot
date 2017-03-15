'use strict';

process.title = 'Bag O Loot';

const { argv : [,, ...args] } = process;
const sortBags = require('./bagsorter');
