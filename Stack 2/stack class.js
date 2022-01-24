function Stack() {
    var collection = [];
    this.print = function() {
      console.log(collection);
    };
    // Only change code below this line
  this.push = function(element) {
   return collection.push(element);
  }
  this.pop = function() {
   return collection.pop();
  }
  this.isEmpty = function() {
   return collection.length === 0;
  }
  this.clear = function() {
    return collection.length = 0;
  }
  this.peek = function() {
    return collection[collection.length - 1]
  }
    // Only change code above this line
  }



  class Stack {
    constructor() {
      this.collection = [];
    }
    print() {
      console.log(this.collection);
    }
    push(val) {
      return this.collection.push(val);
    }
    pop() {
      return this.collection.pop();
    }
    peek() {
      return this.collection[this.collection.length - 1];
    }
    isEmpty() {
      return this.collection.length === 0;
    }
    clear() {
      return (this.collection.length = 0);
    }
  }
