import { Tamagotchi } from './../src/tamagotchi.js';

describe('Tamagotchi', function() {
  let stewart = new Tamagotchi("Stewart");

  beforeEach(function() {
    jasmine.clock().install();
    stewart.setTimer();
    stewart.resetLevels();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and food, mood, rest,and health levels of 5 when it is created', function() {
    expect(stewart.name).toEqual("Stewart");
    expect(stewart.foodLevel).toEqual(5);
    expect(stewart.moodLevel).toEqual(5);
    expect(stewart.foodLevel).toEqual(5);
    expect(stewart.foodLevel).toEqual(5);
  });

  it('should have a mood level of 3 after 21001 milliseconds', function() {
    jasmine.clock().tick(21001);
    expect(stewart.moodLevel).toEqual(3);
  });

  it('should have a food level of 4 after 11001 milliseconds', function() {
    jasmine.clock().tick(11001);
    expect(stewart.foodLevel).toEqual(4);
  });

  it('should increase foodLevel by 5 when fed a meal', function() {
    stewart.feedMeal();
    expect(stewart.foodLevel).toEqual(10);
  });

  it('should increase foodLevel by 2 when fed a snack', function() {

    stewart.feedSnack();
    expect(stewart.foodLevel).toEqual(7);
  });

  it('should increase moodLevel by 5 when play', function() {
    stewart.play();
    expect(stewart.moodLevel).toEqual(10);
  });

  it('should decrease restLevel by 2 when play', function() {
    stewart.play();
    expect(stewart.restLevel).toEqual(3);
  });

  it('should increase restLevel by 5 when sleep', function() {
    stewart.sleep();
    expect(stewart.restLevel).toEqual(10);
  });

  it('should increase healthLevel by 5 when medicate', function() {
    stewart.medicate();
    expect(stewart.healthLevel).toEqual(10);
  });

  it('should decrease healthLevel by 1 if foodLevel equals zero', function(){
    jasmine.clock().tick(51001);
    expect(stewart.healthLevel).toEqual(4);
    expect(stewart.foodLevel).toEqual(0);
  })

  it('should decrease healthLevel by 1 if restLevel equals zero', function(){
    jasmine.clock().tick(51001);
    expect(stewart.healthLevel).toEqual(4);
    expect(stewart.restLevel).toEqual(0);
  })
  it('should return this.sick = true if this.healthLevel <=2', function(){
    jasmine.clock().tick(91001);
    expect(stewart.healthLevel).toEqual(0);
    expect(stewart.sick).toEqual(true);
  })

})
