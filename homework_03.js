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

