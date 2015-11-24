function Stack() {
    this.myarray = [];
}

Stack.prototype.push = function(e) {
    this.myarray.push(e);
}

Stack.prototype.pop = function() {
    return this.myarray.pop();
}

Stack.prototype.peek = function() {
    return this.myarray[this.myarray.length - 1];
}

Stack.prototype.isEmpty = function() {
    return this.myarray.length == 0;
}

function dec2bin(n){
    var st = new Stack();
    var retStr = "";
    while (n != 0){
        st.push(n%2);
        n = Math.floor(n / 2);
    }

    while(!st.isEmpty()) {
        retStr += st.pop().toString();
    }

    return retStr;
}

/*RPN*/

function rpn(str){
    var expArray = [];
    var stN = new Stack();
    var tmp1 = 0;
    var tmp2 = 0;
    expArray = str.split("");

    expArray.forEach(function (e){
        switch(e)
        {
            case "+": tmp2 = stN.pop();
                tmp1 = stN.pop();
                stN.push(tmp1 + tmp2);
                break;
            case "-": tmp2 = stN.pop();
                tmp1 = stN.pop();
                stN.push(tmp1 - tmp2);
                break;
            case "*": tmp2 = stN.pop();
                tmp1 = stN.pop();
                stN.push(tmp1 * tmp2);
                break;
            case "/": tmp2 = stN.pop();
                tmp1 = stN.pop();
                stN.push(tmp1 / tmp2);
                break;
            default: stN.push(parseInt(e));
        }
    });
    return stN.peek();
}

document.write(rpn("1+2-3+4"));