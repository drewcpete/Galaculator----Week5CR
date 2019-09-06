import { Age } from "./../src/galaculator.js"


describe('Age', function(){
  let testAge = 1;
  let testExp = 100;
  it('should test whether the age on Mercury is .24 earth years', function(){
    let testAgeObj = new Age(testAge);
    expect(testAgeObj.getMer()).toEqual(testAge*.24);
  });

  it('should test whether the age on Venus is .62 earth years', function(){
    let testAgeObj = new Age(testAge);
    expect(testAgeObj.getVen()).toEqual(testAge*.62);
  });

  it('should test whether the age on Mars is 1.88 earth years', function(){
    let testAgeObj = new Age(testAge);
    expect(testAgeObj.getMar()).toEqual(testAge*1.88);
  });

  it('should test whether the age on Jupiter is 11.86 earth years', function(){
    let testAgeObj = new Age(testAge);
    expect(testAgeObj.getJup()).toEqual(testAge*11.86);
  });

  it('should test to see if the person has lived beyond their life expectancy', function(){
    let testAgeObj = new Age(100, 1);
    expect(testAgeObj.getJupLife()).toEqual("You're " + jupLife *-1 + " years over your expiration date!");
  });

  it('should test to see how many more years this person should expect to live', function(){
    let testAgeObj = new Age(1, 100);
    expect(testAgeObj.getJupLife()).toEqual("You have " + jupLife + " years left before your death.");
  });
});
