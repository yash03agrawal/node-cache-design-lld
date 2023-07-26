import LRUEvictionPolicy from '../../src/policy/lruEvictionPolicy';

describe('LRUEvictionPolicy', () => {
  const lruPolicy = new LRUEvictionPolicy<number>();

  test('testing if keys are evicted in lru manner', () => {
    lruPolicy.accessKey(1);
    lruPolicy.accessKey(2);
    lruPolicy.accessKey(3);
    lruPolicy.accessKey(4);
    expect(lruPolicy.evictKey()).toEqual(1);
    expect(lruPolicy.evictKey()).toEqual(2);
    lruPolicy.accessKey(3);
    expect(lruPolicy.evictKey()).toEqual(4);
    lruPolicy.accessKey(1);
    lruPolicy.accessKey(3);
    expect(lruPolicy.evictKey()).toEqual(1);
  });
});
