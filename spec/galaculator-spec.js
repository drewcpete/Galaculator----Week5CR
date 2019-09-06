import { Age } from "./../src/galaculator.js"


describe('Age', function(){
  let testAge = 5;
  it('should test whether the age on Mercury is .24 earth years', function(){
    let testAgeObj = new Age(testAge)
    expect(testAgeObj.getMer()).toEqual(.24)
  })

  it('should test whether the age on Venus is .62 earth years', function(){
    let testAgeObj = new Age(testAge)
    expect(testAgeObj.getVen()).toEqual(.62)
  })



  it('should test whether the age on Mars is 1.88 earth years', function(){
    let testAgeObj = new Age(testAge)
    expect(testAgeObj.getMar()).toEqual(1.88)
  })



  it('should test whether the age on Jupiter is 11.86 earth years', function(){
    let testAgeObj = new Age(testAge)
    expect(testAgeObj.getJup()).toEqual(11.86)
  })
});
