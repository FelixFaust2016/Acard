class theArray {
  constructor() {
    this.state = {};
    this.length = 0;
  }

  push(val) {
    this.state[this.length] = val;
    this.length++;
    return this.state;
  }

  pop() {
    this.length--;
    delete this.state[this.length];
    return this.state[this.length];
  }

  findI(val) {
    for (const item in this.state) {
      if (val === this.state[item]) {
        return ("the index is " + item);
      }
    }
  }

  get() {
    return this.state;
  }
}

let newArray = new theArray();
console.log(newArray.push("56"));
console.log(newArray.push("57"));
console.log(newArray.push("58"));
console.log(newArray.push("59"));
console.log(newArray.push("10"));
console.log(newArray.pop());
console.log(newArray.get());
console.log(newArray.findI("59"))
