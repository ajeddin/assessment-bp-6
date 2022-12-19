const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    let arrTest = [1,2,3,4]  
    let result = shuffleArray(arrTest) 
    test('returns array',()=>{
    expect(typeof shuffleArray(arrTest)).toBe('object')
    })
    test('length of array in same as array out',()=>{
    expect(arrTest.length).toBe(result.length)
    })})