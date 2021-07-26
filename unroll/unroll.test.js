const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });


  it('should unroll these arrays', () => {
    const arr1 = [
      [1, 2, 3], 
      [8, 9, 4], 
      [7, 6, 5]];
    const arr2 = [
      [1, 2, 3], 
      [6, 5, 4]];
    const arr3 = [
      [1, 2], 
      [10, 3], 
      [9, 4], 
      [8, 5], 
      [7, 6]];
    const arr4 = [
    [1,  2,  3,  4,  5],
    [24, 25, 26, 27, 6],
    [23, 40, 41, 28, 7],
    [22, 39, 42, 29, 8],
    [21, 38, 43, 30, 9],
    [20, 37, 44, 31, 10],
    [19, 36, 45, 32, 11],
    [18, 35, 34, 33, 12],
    [17, 16, 15, 14, 13]];
    const arr5 = [[1, 2, 3, 4]];
    expect(unroll(arr1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(unroll(arr2)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(unroll(arr3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(unroll(arr4)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]);
    expect(unroll(arr5)).toEqual([1, 2, 3, 4]);
  });
});
