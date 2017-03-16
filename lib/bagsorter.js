
//add toy to bag, and label it with child's name to receive

//remove a toy from bag when status change before delivery

//produce list of children recving presents

//list toys in bag for a child

//specify when a child's toys have been delivered (boolean)
'use strict';

const { readFile, writeFile } = require('fs'),
toyDatafile = 'toybag.json';

// module.exports.getToysByChild = (childName) => {
// 	return new Promise(( resolve, reject) => {
// 		readFile('toybag.json', (err, data) => {
// 			if (err) return reject(err);
// 			let toys = JSON.parse(data).toys[childName].toylist;
// 			resolve(toys);
// 			console.log(toys)
// 		})
// 	})
// };

// module.exports.addToy = () => {
// 	return new Promise( (resolve, reject) => {
// 		readFile('toybag.json', (err, data) => {
// 			if (err) {

// 			}
// 		})
// 	})
// }

module.exports.removeToy = () => {
	return "Removed toy";
}

module.exports.getChildList = () => {
	return [];
}

module.exports.markDelivered = () => {
	return true;
}
