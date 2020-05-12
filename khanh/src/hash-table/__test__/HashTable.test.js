import HashTable from '../index';

describe('HashTable', () => {

    it('should create hash table of certian size', () => {
        const defaultHashTable = new HashTable();
        expect(defaultHashTable.buckets.length).toBe(32);
    })
})
