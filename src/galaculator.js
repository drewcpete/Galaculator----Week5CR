export class Age {
  constructor(earAge, earExp) {
    this.earAge = earAge;
    this.earExp = earExp;
  }

  getJup(){
    const jup = 11.86;
    let jupAge = Math.floor(this.earAge * jup);
    return jupAge;
  }

  getMer(){
    const mer = .24;
    let merAge = Math.floor(this.earAge * mer);
    return merAge;
  }

  getVen(){
    const ven = .62;
    let venAge = Math.floor(this.earAge * ven);
    return venAge;
  }

  getMar(){
    const mar = 1.88;
    let marAge = Math.floor(this.earAge * mar);
    return marAge;
  }

  getJupLife() {
    let life = this.earExp - this.earAge;
    console.log(life);
    let jupLife = life * 11.86;
    console.log(Math.floor(jupLife));
    if (jupLife < 0) {
      return "You're " + Math.floor(jupLife)*-1 + " years over your expiration date!";
    } else {
      return "You have " + Math.floor(jupLife) + " years left before your death.";
    }
  }

  getMarLife() {
    let life = this.earExp - this.earAge;
    let marLife = life * 1.88;
    if (marLife < 0) {
      return "You're " + Math.floor(marLife)*-1 + " years over your expiration date!";
    } else {
      return "You have " + Math.floor(marLife) + " years left before your death.";
    }
  }

  getVenLife() {
    let life = this.earExp - this.earAge;
    let venLife = life * .62;
    if (venLife < 0) {
      return "You're " + Math.floor(venLife)*-1 + " years over your expiration date!";
    } else {
      return "You have " + venLife + " years left before your death.";
    }
  }

  getMerLife() {
    let life = this.earExp - this.earAge;
    let merLife = life * .24
    if (merLife < 0) {
      return "You're " + Math.floor(merLife)*-1 + " years over your expiration date!";
    } else {
      return "You have " + Math.floor(merLife) + " years left before your death.";
    }
  }
}
