/**
 * Created by Marco on 27/11/2015.
 */
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
    for(var i = 0; i < this.queue.length && !exitCondition; i++)
    {
        if(e.priority < this.queue[i].priority)
        {
            this.queue.splice(i, 0, e);
            exitCondition = true;
        }
    }
    if(!exitCondition)
    {
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
//ritorna  1 se il primo parametro è è magiore del secondo  --->>> homework_05.js con nome PriorityQueueC

function PriorityQueueC(cb) {
    this.queue = [];
    this.callback = cb;
}

PriorityQueueC.prototype.enqueue = function(e){
    var exitCondition = false;
    for(var i = 0; i < this.queue.length && !exitCondition; i++)
    {
        if(this.callback(e.priority, this.queue[i].priority) <=0)
        {
            this.queue.splice(i, 0, e);
            exitCondition = true;
        }
    }
    if(!exitCondition)
    {
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

function CircularQueue(lng) {
    this.dimension = lng;
    this.enterIndex = 0;
    this.exitIndex = 0;
    this.queue = [];
}

CircularQueue.prototype.enqueue = function(e){
    if(this.queue[this.enterIndex] == undefined)
    {
        this.queue.splice(this.enterIndex, 0, e);
        this.enterIndex++;
    }
    if(this.enterIndex + 1 > this.dimension)
    {
        this.enterIndex = 0;
    }
}

CircularQueue.prototype.dequeue = function(){
    if(this.queue[this.exitIndex] != undefined)
    {
        var ret = this.queue[this.exitIndex];
        this.queue[this.exitIndex] = undefined;
        this.exitIndex ++;
        if(this.exitIndex + 1 > this.dimension)
        {
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
