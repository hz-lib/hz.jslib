'use strict'

const expect = require('chai').expect
const add = require('../dist/index').default.hello
const common = require('../dist/index').default.Common

describe('hz jstest hello', () => {
    it('should return 10', () => {
        const result = add(2, 8)
        expect(result).to.equal(10)
    })
})

describe('hz-common-py', () => {
    it('should convert firstPY', () => {
        const result = common.ConvertPinyin("测试一下As10")
        expect(result).to.equal('CSYXAs10')
    })
})