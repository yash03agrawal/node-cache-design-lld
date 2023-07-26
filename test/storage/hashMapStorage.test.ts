import HashMapStorage from '../../src/storage/hashMapStorage';

describe('HashMapStorage', () => {
  test('test add', () => {
    const storage: HashMapStorage<number, number> = new HashMapStorage(3);

    storage.add(1, 1);
    storage.add(2, 2);
    storage.add(3, 3);
    expect(storage.get(2)).toEqual(2);
    expect(() => {
      storage.add(4, 4);
    }).toThrow('storage full');
  });

  test('test if storage working fine', () => {
    const storage: HashMapStorage<number, number> = new HashMapStorage(3);

    storage.add(1, 1);
    storage.add(2, 2);
    storage.add(3, 3);
    expect(storage.get(2)).toEqual(2);

    storage.remove(3);
    expect(() => {
      storage.get(3);
    }).toThrow('key not found');

    storage.add(4, 4);
    expect(storage.get(4)).toEqual(4);
  });
});
