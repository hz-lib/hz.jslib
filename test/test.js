'use strict'

const expect = require('chai').expect
const add = require('../dist/index').hello

describe('hz jstest hello', () => {
    it('should return 10', () => {
        const result = add(2, 8)
        expect(result).to.equal(10)
    })
})