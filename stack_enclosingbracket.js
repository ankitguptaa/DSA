class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.items.length === 0) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function isValidParentheses(inputString) {
    let stack = new Stack();
    for (let index = 0; index < inputString.length; index++) {
        const newBracket = inputString[index];
        if (newBracket === '{' ||
            newBracket === '(' ||
            newBracket === '['
        ) {
            stack.push(newBracket);
        } else if (newBracket === '}' ||
            newBracket === ')' ||
            newBracket === ']'
        ) {
            if (!stack.isEmpty()) {
                if (
                    (stack.peek() === '{' && newBracket !== '}') ||
                    (stack.peek() === '(' && newBracket !== ')') ||
                    (stack.peek() === '[' && newBracket !== ']')
                ) {
                    return false;
                } else {
                    stack.pop();
                }
            } else {
                return false;
            }
        }
    }

    return stack.isEmpty();
}

function validateParentheses(inputString) {
    return isValidParentheses(inputString);
}

console.log(validateParentheses('(){}'));
console.log(validateParentheses('(}{)'));