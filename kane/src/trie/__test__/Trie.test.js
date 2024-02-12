import Trie from '../';
describe('Trie', () => {
    it('should create trie', () => {
        const trie = new Trie();

        expect(trie).toBeDefined();
        expect(trie.head.toString()).toBe('*');
    });


    it('should add words to trie', () => {
        const trie = new Trie();

        trie.addWord('cat');

        expect(trie.head.toString()).toBe('*:c');
        expect(trie.head.getChild('c').toString()).toBe('c:a');

        trie.addWord('car');
        expect(trie.head.toString()).toBe('*:c');
        expect(trie.head.getChild('c').toString()).toBe('c:a');
        expect(trie.head.getChild('c').getChild('a').toString()).toBe('a:t,r');
        expect(trie.head.getChild('c').getChild('a').getChild('t').toString()).toBe('t*');
    });

    // it('shoud delete words from trie', () => {

    //     const trie = new Trie()
    //     trie.addWord('carpet')
    //     trie.addWord('car')
    //     trie.addWord('cat')
    //     trie.addWord('cart')
    //     expect(trie.doesWordExist('carpet')).toBe(true)
    //     expect(trie.doesWordExist('cartpets')).toBe(false)

    //     trie.deleteWord('carpet')
    //     expect(trie.doesWordExist('carpet')).toBe(false)

    //     trie.deleteWord('cat');
    //     expect(trie.doesWordExist('cat')).toEqual(false);
    // })

    // it('should suggest next characters', () => {
    //     const trie = new Trie();
    //     trie.addWord('cat');
    //     trie.addWord('cats');
    //     trie.addWord('car');
    //     trie.addWord('caption');

    //     expect(trie.suggestNextCharacters('ca')).toEqual(['t', 'r', 'p']);
    //     expect(trie.suggestNextCharacters('cat')).toEqual(['s']);
    //     expect(trie.suggestNextCharacters('cab')).toBeNull();
    // })


    it('unit test khanh khang', () => {
        const trie = new Trie();
        trie.addWord('khanh');
        trie.addWord('khang');
        trie.deleteWord('khanh')
        // trie.deleteWord('khanh')
        // console.log('DELVET', trie.deleteWord('khanh').getLastCharacterNode("khang"));



    })


})
