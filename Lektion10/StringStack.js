class StringStack {
    constructor() {
        this.array = [];
    }
    push(o) {
        if (typeof o === "string")
        this.array.push(o);
    }

    pop() {
        return this.array.pop();
    }
}


let stack = new StringStack();
stack.push("Ole");
stack.push("Zia")
console.log(stack)
console.log(stack.pop())