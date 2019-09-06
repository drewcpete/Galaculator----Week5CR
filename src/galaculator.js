export class Age {
  constructor(earAge, earExp) {
    this.earAge = earAge;
    this.earExp = earExp;
  };

  getJup(){
    const jup = 11.86;
    let jupAge = this.earAge * jup;
    return jupAge;
  };

  getMer(){
    const mer = .24;
    let merAge = this.earAge * mer;
    return merAge;
  };

  getVen(){
    const ven = .62;
    let venAge = this.earAge * ven;
    return venAge;
  };

  getMar(){
    const mar = 1.88;
    let marAge = this.earAge * mar;
    return marAge;
  };

  getJupLife() {
    let life = this.earExp - this.earAge;
    let jupLife = life*11.86;
    if (jupLife < 0) {
      return "You're " + jupLife*-1 + " years over your expiration date!";
    } else {
      return "You have " + jupLife + " years left before your death.";
    }
  }

  getMarLife() {
    let life = this.earExp - this.earAge;
    let marLife = life*1.88;
    if (marLife < 0) {
      return "You're " + marLife*-1 + " years over your expiration date!";
    } else {
      return "You have " + marLife + " years left before your death.";
    }
  };

  getVenLife() {
    let life = this.earExp - this.earAge;
    let venLife = life*.62;
    if (venLife < 0) {
      return "You're " + venLife*-1 + " years over your expiration date!";
    } else {
      return "You have " + venLife + " years left before your death.";
    }
  };

  getMerLife() {
    let life = this.earExp - this.earAge;
    let merLife = life*.24
    if (merLife < 0) {
      return "You're " + merLife*-1 + " years over your expiration date!";
    } else {
      return "You have " + merLife + " years left before your death.";
    }
  }
};
