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

//da modificare con la priorità che diventa un qualsiasi cosa e PriorityQueue accetta un parametro funzione priority che:
//ritorna  0 se i due parametri sono uguali
//ritorna -1 se il primo parametro è minore del secondo
//ritorna  1 se il primo parametro è è magiore del secondo  --->>> homework_05.js con nome PriorityQueueC

function QueueItem(item, priority) {
    this.item = item;
    this.priority = priority;
}

/*homework_05.js implementare coda circolare

    condizioni:
    - arrivato in fondo al vettore si inserisce in testa per dare circolarità
    - la dimensione dell'array è fissa
    - dobbiamo salvare l'indice di dove potrò inserire il prossimo dato e l'indce del prossimo dato da poppare
    !!! I METODI SONO GLI STESSI DELLA CODA, CAMBIA L'IMPLEMENTAZIONE !!!
*/

/*
    Implementare la parte merge, dati 2 array ordinati creare un nuovo array ordinato unendoli
    -->> nome merge() file homework_06.js
 */