export class Age {
  constructor(earAge) {
    this.earAge = earAge;
  }

  getJup(){
    const jup = 11.86;
    let jupAge = this.earAge * jup;
    return jupAge;
  }

  getMer(){
    const mer = .24;
    let merAge = this.earAge * mer;
    return merAge;
  }

  getVen(){
    const ven = .62;
    let venAge = this.earAge * ven;
    return venAge;
  }

  getMar(){
    const mar = 1.88;
    let marAge = this.earAge * mar;
    return marAge;
  }
}




// this.venAge = this.earAge * .62;
// this.venExpect = this.earExpect * .62;
// this.venLeft = this.venExpect - this.venAge;

// this.marAge = this.earAge * 1.88;
// this.marExpect = this.earExpect * 1.88;
// this.marLeft = this.marExpect - this.marAge;

// this.merAge = this.earAge * .24;
// this.merExpect = this.earExpect * .24;
// this.merLeft = this.merExpect - this.merAge;


// , merAge, venAge, marAge, jupAge, earExpect, jupExpect, marExpect, venExpect, merExpect, merLeft, venLeft, marLeft, jupLeft





// this.earAge = earAge;
// this.merAge = 0;
// this.venAge = 0;
// this.marAge = 0;
// this.jupAge = 0;
// this.merLeft = 0;
// this.venLeft = 0;
// this.marLeft = 0;
// this.jupLeft = 0;
// this.earExpect = earExpect;
// this.jupExpect = 0;
// this.marExpect = 0;
// this.venExpect = 0;
// this.merExpect = 0;
