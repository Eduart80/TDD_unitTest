import {expect} from 'chai'
import {getLetterCount} from './lettersCount'


describe('getLetterCount', ()=>{
    it('return an emty obj when passed empty string',()=>{
        const expected = {}
        const actual = getLetterCount('')
        expect(actual).to.deep.eq(expected)
    })
    it('getLetterCount return count of letters',()=>{
        const expected = {c:1, a:1,t:1}
        const actual = getLetterCount('cat')
        expect(actual).to.deep.eq(expected)
    })
    it('should return correct letter count',()=>{
        const expected = {m:1,i:4,s:4,p:2}
        const actual = getLetterCount('mississippi')
        expect(actual).to.deep.eq(expected)
    })
})