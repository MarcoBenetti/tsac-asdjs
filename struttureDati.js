//======================================LIFO======================================

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

    while(!st.isEmpty()){
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

//======================================FIFO======================================

function Queue() {
    this.queue = [];
}

Queue.prototype.enqueue = function(e){
    this.queue.unshift(e);
}

Queue.prototype.dequeue = function(){
    return this.queue.pop();
}

Queue.prototype.front = function(){
    return this.queue[this.queue.length - 1];
}

Queue.prototype.size = function(){
    return this.queue.length;
}

Queue.prototype.isEmpty = function(){
    return this.size() == 0;
}

//implementare una priority queue un cui gli elementi inseriti sono oggetti che contengno elemento e priorità
//modificando enqueue in modo che butti dentro nel vettore secondo la priorità
//usare array.splice(indice da modificare, elementi da cancellare [ossia 0], elemento da aggiungere)
//non ritorna un array, lo modifica direttamente   --->>> su homework_05.js con funzione PriorityQueue

function PriorityQueue() {
    this.queue = [];
}

PriorityQueue.prototype.enqueue = function(e){
    var exitCondition = false;
    for(var i = 0; i < this.queue.length && !exitCondition; i++){
        if(e.priority < this.queue[i].priority) {
            this.queue.splice(i, 0, e);
            exitCondition = true;
        }
    }
    if(!exitCondition){
        this.queue.push(e);
    }
}

PriorityQueue.prototype.dequeue = function(){
    return this.queue.pop();
}

PriorityQueue.prototype.front = function(){
    return this.queue[this.queue.length - 1];
}

PriorityQueue.prototype.size = function(){
    return this.queue.length;
}

PriorityQueue.prototype.isEmpty = function(){
    return this.size() == 0;
}


function QueueItem(item, priority) {
    this.item = item;
    this.priority = priority;
}


//da modificare con la priorità che diventa un qualsiasi cosa e PriorityQueue accetta un parametro funzione priority che:
//ritorna  0 se i due parametri sono uguali
//ritorna -1 se il primo parametro è minore del secondo
//ritorna  1 se il primo parametro è è magiore del secondo  --->>> homework_05.js con nome PriorityQueueCallback

function PriorityQueueC(cb){
    this.queue = [];
    this.callback = cb;
}

PriorityQueueC.prototype.enqueue = function(e){
    var exitCondition = false;
    for(var i = 0; i < this.queue.length && !exitCondition; i++){
        if(this.callback(e.priority, this.queue[i].priority) == -1){
            this.queue.splice(i, 0, e);
            exitCondition = true;
        }
    }
    if(!exitCondition){
        this.queue.push(e);
    }
}

PriorityQueueC.prototype.dequeue = function(){
    return this.queue.pop();
}

PriorityQueueC.prototype.front = function(){
    return this.queue[this.queue.length - 1];
}

PriorityQueueC.prototype.size = function(){
    return this.queue.length;
}

PriorityQueueC.prototype.isEmpty = function(){
    return this.size() == 0;
}


/*homework_05.js implementare coda circolare

    condizioni:
    - arrivato in fondo al vettore si inserisce in testa per dare circolarità
  +  - la dimensione dell'array è fissa
  +  - dobbiamo salvare l'indice di dove potrò inserire il prossimo dato e l'indce del prossimo dato da poppare
    !!! I METODI SONO GLI STESSI DELLA CODA, CAMBIA L'IMPLEMENTAZIONE !!!
*/

function CircularQueue(lng){
    this.dimension = lng;
    this.enterIndex = 0;
    this.exitIndex = 0;
    this.queue = [];
}

CircularQueue.prototype.enqueue = function(e){
    if(this.queue[this.enterIndex] == undefined){
        this.queue.splice(this.enterIndex, 0, e);
        this.enterIndex++;
    }
    if(this.enterIndex + 1 > this.dimension){
        this.enterIndex = 0;
    }
}

CircularQueue.prototype.dequeue = function(){
    if(this.queue[this.exitIndex] != undefined){
        var ret = this.queue[this.exitIndex];
        this.queue[this.exitIndex] = undefined;
        this.exitIndex ++;
        if(this.exitIndex + 1 > this.dimension){
            this.enterIndex = 0;
        }
        return ret;
    }
    return undefined;
}

CircularQueue.prototype.front = function(){
    return this.queue[this.exitIndex];
}

CircularQueue.prototype.size = function(){
    return this.size();
}

CircularQueue.prototype.isEmpty = function(){
    return this.enterIndex == this.exitIndex;
}

/*
    Implementare la parte merge, dati 2 array ordinati creare un nuovo array ordinato unendoli
    -->> nome merge() file homework_06.js
 */

function merge(ar1, ar2) {
    var robaToBeReturned = [];
    var i1 = 0;
    var i2 = 0;

    while(i1 < ar1.length || i2 < ar2.length)
    {
        if(ar1[i1] < ar2[i2]) {
            robaToBeReturned.push(ar1[i1]);
            i1++;
        } else {
            robaToBeReturned.push(ar2[i2]);
            i2++;
        }
    }
    if (i1 < ar1.length) {
        robaToBeReturned = robaToBeReturned.concat(ar1.slice(i1));
    }
    if (i2 < ar2.length) {
        robaToBeReturned = robaToBeReturned.concat(ar2.slice(i2));
    }
    return robaToBeReturned;
}

function mergeSort(myarray) {

    if(myarray.length == 1) {
        return myarray;
    } else {
        var l = myarray.length / 2;
        var left = myarray.slice(0, Math.ceil(l));
        var right = myarray.slice(Math.ceil(l));
        return merge(mergeSort(left), mergeSort(right));
    }
}

//======================================================ALBERI======================================================

function Node(i, left, right){
    this.item = i;
    this.l = left;
    this.r = right;
}

function BST(){
    this.root = null;
}

BST.prototype.addNode = function(currentNode, newNode){

    if(newNode.item < currentNode.item) {
        if (currentNode.l == null){
            currentNode.l = newNode;
        } else {
            return this.addNode(currentNode.l, newNode);
        }
    } else {
        if (currentNode.r == null){
            currentNode.r = newNode;
        } else {
            return this.addNode(currentNode.r, newNode);
        }
    }
}

BST.prototype.add = function(item){
    if(this.root == null)
        this.root = new Node(item, null, null);
    else
        this.addNode(this.root, new Node(item, null, null));
}

function inOrder(tree, callback){
    if( tree != null){
        inOrder(tree.l, callback);
        callback(tree.item);
        inOrder(tree.r, callback);
    }
}

function preOrder(tree, callback){
    if( tree != null){
        callback(tree.item);
        inorder(tree.l, callback);
        inOrder(tree.r, callback);
    }
}

function postOrder(tree, callback){
    if( tree != null){
        inorder(tree.l, callback);
        inOrder(tree.r, callback);
        callback(tree.item);
    }
}

function search(node, item){
    if (node == null) {
        return false;
    }

    if(item == node.item){
        return true;
    } else {
        if (item < node.item){
            return search(node.l, e);
        } else if (item > node.item){
            return search(node.r, e);
        }
    }
}

/*


*/
