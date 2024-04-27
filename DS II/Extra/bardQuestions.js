function operands(str){
    const stack = [];

    for(let i = 0;i<str.length;i++){
        let operand = false;
        const n = stack.length;
        let total = 0;
        switch(str[i]){
            case "+":
                for(let i = 1;i<=n;i++){
                    const value = Number(stack.pop())
                    total += value;
                }
                stack.push(total);
                break;
            case "-":
                for(let i = 1;i<=n;i++){
                    const value = Number(stack.pop())
                    total -= value;
                }
                stack.push(total);
                break;
            case "*":
                total = 1;
                for(let i = 1;i<=n;i++){
                    const value = Number(stack.pop())
                    total *= value;
                }
                stack.push(total);
                break;
            case "/":
                total = Number(stack.pop());
                for(let i = 2;i<=n;i++){
                    const value = Number(stack.pop())
                    total /= value;
                }
                stack.push(total);
                break;
            default:
                stack.push(str[i]);
        }
    }

    return stack.pop();
}

const str = ["2", "1", "+", "3", "*"];

console.log(operands(str));