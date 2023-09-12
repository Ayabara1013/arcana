


const [user, setUser] = useState(() => {
  const trackedItems = {
    item1: true,
    item2: true,
    item3: false
  }

  const collectedItems = {
    item1: true,
    item2: false,
    item3: false
  }

  const tendies = 0;

  class ClassSet {
    constructor(armour, weapons, cName, month) {
      this.armour = armour;
      this.weapons = weapons;
      this.cName = cName; // class name
      this.month = month;
    }
  }

  const classSets = {

  }

  return {
    trackedItems,
    collectedItems

  };
});