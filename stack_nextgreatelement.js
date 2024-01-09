class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.items.length === 0) {
            "No Elements in stack";
        }

        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        return this.items[this.items.length - 1]; 
    }
}

function findNextGreaterElements(arr) {
    let stack = new Stack();
    let max = arr[arr.length - 1];
    stack.push(-1);
    for (let index = arr.length - 2; index >= 0; index--) {
        const element = arr[index];
        if(element > max) {
            max = element;
            stack.push(-1);
        } else {
            stack.push(max);
        }
    }
}

function getNextGreaterElements(input) {
    return findNextGreaterElements(Array.from(input)); 
}