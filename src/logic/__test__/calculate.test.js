import calculate from "../calculate";

describe('Calculate', () => {
const obj ={total: null,
      next: null,
      operation: null,
}
   test('adds 1 + 2 to equal 3', () => {
      expect(calculate(obj,'1')).toEqual({"next":"1", "total": null});
   });
});
