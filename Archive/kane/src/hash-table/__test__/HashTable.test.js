import HashTable from '../index';

describe('HashTable', () => {

    it('should create hash table of certian size', () => {
        const defaultHashTable = new HashTable();
        expect(defaultHashTable.buckets.length).toBe(32);

        const biggerHashTable = new HashTable(64);
        expect(biggerHashTable.buckets.length).toBe(64);
    })

    it('should generate proper hash for specified keys', () => {
        const hashTable = new HashTable();

        expect(hashTable.hash('a')).toBe(1);
        expect(hashTable.hash('b')).toBe(2);
        expect(hashTable.hash('abc')).toBe(6);
    });

    it('shoud set, read and delete data with collitions', () => {
        const hashTable = new HashTable(3)

        expect(hashTable.hash('a')).toBe(1)
        expect(hashTable.hash('b')).toBe(2)



    })


})
