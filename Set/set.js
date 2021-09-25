function mySet() {
  const collection = [];

  this.has = function (value) {
    const index = collection.indexOf(value);
    return index >= 0;
  };

  this.add = (value) => {
    if (!this.has(value)) {
      collection.push(value);
      return true;
    }
    return false;
  };

  this.values = () => {
    return collection;
  };

  this.remove = (value) => {
    if (this.has(value)) {
      const index = collection.indexOf(value);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = () => {
    return collection.length;
  };

  this.union = (otherSet) => {
    const union = new mySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();
    firstSet.forEach((item) => union.add(item));
    secondSet.forEach((item) => union.add(item));
    return union.values();
  };

  this.intersection = (otherSet) => {
    const intersection = new mySet();
    const firstSet = this.values();
    firstSet.forEach((item) => {
      if (otherSet.has(item)) {
        intersection.add(item);
      }
    });
    return intersection.values();
  };

  this.difference = (otherSet) => {
    const difference = new mySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();

    firstSet.forEach((item) => {
      if (!otherSet.has(item)) {
        difference.add(item);
      }
    });

    return difference.values();
  };
}

const setA = new mySet();
setA.add("a");
setA.add("j");

const setB = new mySet();
setB.add("a");
setB.add("b");
setB.add("c");

console.log(setA.difference(setB));
