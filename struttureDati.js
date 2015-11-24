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

/*RPN*/

function rpn(str){
    var arr = [];
    var stN = new Stack();
    var stO = new Stack();
    arr = str.split("");

    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] == "+"||arr[i] == "-" || arr[i] == "*" || arr[i] == "/")
        {
            stO.push(arr[i]);
        } else {
            stN.push(parseInt(arr[i]));
            console.log()
        }
    }

    stN.myarray.reverse();
    stO.myarray.reverse();

    while(!stO.isEmpty())
    {
        var tmp1 = stN.pop();
        var tmp2 = stN.pop();
        var op = stO.pop();
        var ris = 0;
        switch(op)
        {
            case "+": ris = tmp1 + tmp2;
                break;
            case "-": ris = tmp2 - tmp1;
                break;
            case "*": ris = tmp1 * tmp2;
                break;
            case "/": ris = tmp2 / tmp1;
                break;
        }
        stN.push(ris);
    }

    return stN.pop();
}

document.write(cose("1+2-3+4"));