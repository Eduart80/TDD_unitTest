import {expect} from 'chai'
import {isAnagram} from './anagram'

describe('anagram basic functionality', ()=> {
    it('return true when two anagrams are pased in',()=>{
        const expected = true
        const actual = isAnagram('listen','silent')
        expect(expected).to.eq(actual)
    })
})