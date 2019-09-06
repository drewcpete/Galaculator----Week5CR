import { Age } from "./../src/galaculator.js"


describe('Age', function(){

  let testAge = 1;
  let testExp = 100;
  let testLife = testExp - testAge;

  it('should test whether the age on Mercury is .24 earth years', function(){
    let testAgeObj = new Age(testAge);
    expect(testAgeObj.getMer()).toEqual(Math.floor(testAge*.24));
  });

  it('should test whether the age on Venus is .62 earth years', function(){
    let testAgeObj = new Age(testAge);
    expect(testAgeObj.getVen()).toEqual(Math.floor(testAge*.62));
  });

  it('should test whether the age on Mars is 1.88 earth years', function(){
    let testAgeObj = new Age(testAge);
    expect(testAgeObj.getMar()).toEqual(Math.floor(testAge*1.88));
  });

  it('should test whether the age on Jupiter is 11.86 earth years', function(){
    let testAgeObj = new Age(testAge);
    expect(testAgeObj.getJup()).toEqual(Math.floor(testAge*11.86));
  });

  it('should test to see if the person has lived beyond their life expectancy', function(){
    let testAgeObj = new Age(testAge, testExp, testLife);
    expect(testAgeObj.getJupLife(testLife)).toEqual("You're " + Math.floor(testLife) *-1 + " years over your expiration date!");
  });

  it('should test years this person should expect to live', function(){
    let testAgeObj = new Age(testAge, testExp, testLife);
    expect(testAgeObj.getJupLife(testLife)).toEqual("You have " + Math.floor(testLife) + " years left before your death.");
  });


});
