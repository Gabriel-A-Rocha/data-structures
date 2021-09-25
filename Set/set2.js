class MySet {
  collection = [];

  constructor(values = []) {
    if (values.length > 0) {
      values.forEach((v) => this.add(v));
    }
  }

  has = (value) => this.collection.indexOf(value) >= 0;

  values = () => this.collection;

  add = (value) => {
    if (!this.collection.includes(value)) {
      this.collection.push(value);
    }
  };

  remove = (value) => {
    const index = this.collection.findIndex((v) => v === value);
    if (index >= 0) this.collection.splice(index, 1);
  };

  size = () => this.collection.length;

  union = (otherSet) => {
    const valuesFirstSet = this.values();
    const valuesSecondSet = otherSet.values();
    const union = new MySet([...valuesFirstSet, ...valuesSecondSet]);
    return union.values();
  };

  intersection = (otherSet) => {
    const valuesFirstSet = this.values();
    const valuesSecondSet = otherSet.values();
    const intersection = new MySet();
    valuesFirstSet.forEach((v) => {
      valuesSecondSet.includes(v) && intersection.add(v);
    });
    valuesSecondSet.forEach((v) => {
      valuesFirstSet.includes(v) && intersection.add(v);
    });
    return intersection.values();
  };

  difference = (otherSet) => {
    const valuesFirstSet = this.values();
    const valuesSecondSet = otherSet.values();
    const difference = new MySet();
    valuesFirstSet.forEach((v) => {
      !valuesSecondSet.includes(v) && difference.add(v);
    });
    return difference.values();
  };
}

const set = new MySet([1, 5, 7]);

console.log(set.has(5));

set.add(9);
set.add(9);
set.remove(5);

console.log("firstSet ", set.values());

const secondSet = new MySet([2, 4, 7]);
console.log("secondSet ", secondSet.values());

const union = set.union(secondSet);
console.log("union ", union);

const intersection = set.intersection(secondSet);
console.log("intersection", intersection);

const difference = set.difference(secondSet);
console.log("difference", difference);
