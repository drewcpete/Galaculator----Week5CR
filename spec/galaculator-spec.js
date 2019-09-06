import { Age } from "./../src/galaculator.js"
describe('Age', function(){

  it('should test whether the age on Mercury is .24 earth years', function(){
    let testAgeObj = new Age(12, 33);
    expect(testAgeObj.getMer()).toEqual(Math.floor(12*.24));
  });

  it('should test whether the age on Venus is .62 earth years', function(){
    let testAgeObj = new Age(44);
    expect(testAgeObj.getVen()).toEqual(Math.floor(44*.62));
  });

  it('should test whether the age on Mars is 1.88 earth years', function(){
    let testAgeObj = new Age(31);
    expect(testAgeObj.getMar()).toEqual(Math.floor(31*1.88));
  });

  it('should test whether the age on Jupiter is 11.86 earth years', function(){
    let testAgeObj = new Age(55);
    expect(testAgeObj.getJup()).toEqual(Math.floor(55*11.86));
  });

  it('should test to see if the person has lived beyond their life expectancy', function(){
    let testAgeObj = new Age(110, 55);
    expect(testAgeObj.getJupLife()).toEqual("You're " + Math.floor((55 - 110)*-11.86)  + " years over your expiration date!");
  });

  it('should test for how many more years to expect to live', function(){
    let testAgeObj = new Age(1, 100);
    expect(testAgeObj.getJupLife()).toEqual("You have " + Math.floor((100-1)*11.86) + " years left before your death.");
  });

  it('should test to see if the person has lived beyond their life expectancy', function(){
    let testAgeObj = new Age(110, 55);
    expect(testAgeObj.getMarLife()).toEqual("You're " + Math.floor((55 - 110)*-1.88)  + " years over your expiration date!");
  });

  it('should test for how many more years to expect to live', function(){
    let testAgeObj = new Age(1, 100);
    expect(testAgeObj.getMarLife()).toEqual("You have " + Math.floor((100-1)*1.88) + " years left before your death.");
  });

  it('should test to see if the person has lived beyond their life expectancy', function(){
    let testAgeObj = new Age(110, 55);
    expect(testAgeObj.getVenLife()).toEqual("You're " + Math.floor((55 - 110)*-.62)  + " years over your expiration date!");
  });

  it('should test for how many more years to expect to live', function(){
    let testAgeObj = new Age(1, 100);
    expect(testAgeObj.getVenLife()).toEqual("You have " + Math.floor((100-1)*.62) + " years left before your death.");
  });

  it('should test to see if the person has lived beyond their life expectancy', function(){
    let testAgeObj = new Age(110, 55);
    expect(testAgeObj.getMerLife()).toEqual("You're " + Math.floor((55 - 110)*-.24)  + " years over your expiration date!");
  });

  it('should test for how many more years to expect to live', function(){
    let testAgeObj = new Age(1, 100);
    expect(testAgeObj.getMerLife()).toEqual("You have " + Math.floor((100-1)*.24) + " years left before your death.");
  });

});
