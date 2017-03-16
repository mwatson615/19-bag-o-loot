const {assert : { isArray, equal, isTrue, deepEqual } } = require('chai');

const { getToysByChild, addToy, removeToy, getChildList, markDelivered } = require('../lib/bagsorter.js')

describe('bagsorter', () => {
	describe('getToysByChild', () => {
	it('should return array of toys', () => {
		let result = 'Furby, soccer ball, stuffed unicorn';
		return getToysByChild("Timmy")
		.then((toyData) => {
		isArray(toyData)
		})
	})
	it('should return list of toys by child', () => {
		let expected = 'Furby, soccer ball, stuffed unicorn';
		return getToysByChild("Timmy")
		.then((toyData) => {
		let result = toyData.join(', ')
		equal(result, expected)
		})
	})
	})
	describe('addToy', () => {
		it('should verify that a toy was added', () => {
			return addToy('Barbie Doll', 'Fred')
			.then( () => {
				return getToysByChild('Fred')
			})
			.then((toyArray) => {
				deepEqual(['Barbie Doll'], toyArray)
			})
		})
	})
	describe('removeToy', () => {
		it('should verify that a toy was removed', () => {
			let expected = 'Removed toy';
			let result = removeToy();
			equal(expected, result);
		})
	})
	describe('getChildList', () => {
		it('should return an array of kids', () => {
			let result = getChildList();
			isArray(result)
		})
	})
	describe('markDelivered', () => {
		it('changes delivered prop to true', () => {
			let isChildHappy = true;
			isTrue(markDelivered());
		})
	})
})
//items can be added to bag

//items can be removed from bag, per child

//list all children who are getting a toy

//list all toys for a given child's name

//can set delivered property
