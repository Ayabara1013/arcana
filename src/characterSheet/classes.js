
/**
 * uses: [current, max, interval]
 */
export class ClassFeature {
    constructor(name, pclass, clevel, description, uses, type) {
      this.name = name;
      this.pclass = pclass;
      this.clevel = clevel;
      this.description = description;
      this.uses = uses;
      this.type = type;
    }
}

export class Modifier {
  constructor(name, value, condition) {
    this.name = name;
    this.value = value;
    this.condition = condition;
  }
}