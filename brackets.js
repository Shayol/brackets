function brackets(str) {

    let result = false;

    result = checkBracket("(",")",str) && checkBracket("[","]",str) && checkBracket("{","}",str);
    
    function checkBracket(leftBracket, rightBracket, str) {
        let arr = [...str];
        let left = arr.reduce((acc, el, i) => {
            if (el == leftBracket) {
                acc.push(i);
            }
            return acc;
        }, []);
        let right = arr.reduce((acc, el, i) => {
            if (el == rightBracket) {
                acc.push(i);
            }
            return acc
        }, []);

        if (left.length != right.length) {
            return false;
        }

        let leftSum = left.reduce((acc, el) => acc + el);
        let rightSum = right.reduce((acc, el) => acc + el);

        if (leftSum + left.length <= rightSum) {
            return true;
        }
        return false;
    }
    return result;
}

console.log(brackets("[{(аа(б))}](сссс)"));
console.log(brackets("(аааа{(б)}(сссс)]["));