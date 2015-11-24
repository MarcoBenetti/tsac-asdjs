/**
 * Created by Marco on 24/11/2015.
 */
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
    if (this.myarray.length == 0) {
        return true;
    } else {
        return false;
    }
}

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