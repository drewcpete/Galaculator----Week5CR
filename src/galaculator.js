export class Age {
  constructor(earAge, merAge, venAge, marAge, jupAge, earExpect, jupExpect, marExpect, venExpect, merExpect, merLeft, venLeft, marLeft, jupLeft) {
    this.earAge = earAge;
    this.merAge = merAge;
    this.venAge = venAge;
    this.marAge = marAge;
    this.jupAge = jupAge;
    this.earExpect = earExpect;
    this.jupExpect = jupExpect;
    this.marExpect = marExpect;
    this.venExpect = venExpect;
    this.merExpect = merExpect;
    this.merLeft = merLeft;
    this.venLeft = venLeft;
    this.marLeft = marLeft;
    this.jupLeft = jupLeft;
  }

  getAges(){
    this.merAge = this.earAge * .24;
    this.venAge = this.earAge * .62;
    this.marAge = this.earAge * 1.88;
    this.jupAge = this.earAge * 11.86;
  }

  getExpect(){
    this.merExpect = this.earExpect * .24;
    this.venExpect = this.earExpect * .62;
    this.marExpect = this.earExpect * 1.88;
    this.jupExpect = this.earExpect * 11.86;
  }

  getYearLeft(){
    this.merLeft = this.merExpect - this.merAge;
    this.venLeft = this.venExpect - this.venAge;
    this.marLeft = this.marExpect - this.marAge;
    this.jupLeft = this.jupExpect - this.jupAge;
  }
}
