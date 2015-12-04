function initialArray() {
    var seed = 1;
    function random() {
        var x = Math.sin(seed++) * 10000;
        return Math.floor(x);
    }

    var a = [];
    for(var i = 0; i < 10000; ++i) {
        a.push(random());
    }
    return a;
}

//======================================ESERCIZIO 1======================================

function search5070(myarray) {
    if(myarray.length == 0) {
        return 0;
    }
    else {
        if(myarray[0] == 5070) {
            return 1 + search5070(myarray.slice(1));
        } else {
            return search5070(myarray.slice(1));
        }
    }
}

//======================================ESERCIZIO 2======================================

function sumRootSquareEvenPositive(myarray) {
    return Math.sqrt(myarray.filter( x => x % 2 == 0 && x >= 0).map(x => x * x).reduce((acc, x) => acc + x, 0));
}

//======================================ESERCIZIO 3======================================

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

var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

function evaluateExpr(callback) {
    return callback(_0xd10d[0]);
}

function operate(n1, n2, op) {
    switch (op) {
        case "+":return n1 + n2;
            break;
        case "-":return n1 - n2;
            break;
        case "*":return n1 * n2;
            break;
        case "/":return n1 / n2;
            break;
    }
}

function evaluateFullyParentherized(str) {
    var s = new Stack();
    var v = new Stack();

    var num1 = 0;
    var num2 = 0;
    var operator = "";

    var expArray = str.split(" ");

    expArray.forEach(function (x) {
        switch (x) {
            case "+" : s.push(x);
                break;
            case "-" : s.push(x);
                break;
            case "*" : s.push(x);
                break;
            case "/" : s.push(x);
                break;
            case "(" : s.push(x);
                break;
            case ")" : num1 = v.pop();
                num2 = v.pop();
                operator = s.pop()
                s.pop();            //eliminazione parentesi aperta
                v.push(operate(num2, num1, operator));
                break;
            default : v.push(parseInt(x));
                break;
        }
    });

    return v.pop();
}

//======================================ESERCIZIO 4======================================

function Node(i, left, right) {
    this.item = i;
    this.l = left;
    this.r = right;
}

function BST() {
    this.root = null;
}

BST.prototype.addNode = function(currentNode, newNode) {

    if(newNode.item < currentNode.item) {
        if (currentNode.l == null) {
            currentNode.l = newNode;
        } else {
            return this.addNode(currentNode.l, newNode);
        }
    } else {
        if (currentNode.r == null) {
            currentNode.r = newNode;
        } else {
            return this.addNode(currentNode.r, newNode);
        }
    }
}

BST.prototype.add = function(item) {
    if (this.root == null)
        this.root = new Node(item, null, null);
    else
        this.addNode(this.root, new Node(item, null, null));
}

function treeMax(node) {  //l'inserimento del vettore nel BST è nella funzione demoEs4()
    if (node.r == null) {
        return node.item;
    } else {
        return treeMax(node.r);
    }
}

function demoEs4() {
    var tree = new BST();
    initialArray().forEach(function (x){tree.add(x)});
    document.write(treeMax(tree.root));
}

console.log(initialArray());


