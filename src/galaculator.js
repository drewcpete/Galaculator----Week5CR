export class Age {
  constructor(earAge, merAge, venAge, marAge, jupAge, expectancy) {
    this.earAge = earAge;
    this.merAge = merAge;
    this.venAge = venAge;
    this.marAge = marAge;
    this.jupAge = jupAge;
    this.expectancy = expectancy;
  }
  getAges(){
    this.merAge = this.earAge * .24;
    this.venAge = this.earAge * .62;
    this.marAge = this.earAge * 1.88;
    this.jupAge = this.earAge * 11.86;
  }
  get
}
