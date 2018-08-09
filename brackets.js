function brackets(str) {

    var br = "{[()]}";
    var leftBr = "([{";
    var rightBr = ")]}";
    var arr = [...str];


    var list = arr.reduce((acc, el) => {
        if (br.indexOf(el) != -1) {
            acc.push(el)
        }
        return acc;
    }, []);

    if(list.length == 0) {
        return true;
    }
    var stack = [];

    var nonPaired = list.some((el) => {
        if(rightBr.indexOf(el) != -1) {
            let left = stack.pop();
            if(leftBr.indexOf(left) == rightBr.indexOf(el)) {
                return false;
            }
            else {
                return true
            }
        }
        stack.push(el);
        return false;
    });

    return !(stack.length > 0 || nonPaired);
}

console.log(brackets("[{(аа(б))}](сссс)"));
console.log(brackets("([)]"));