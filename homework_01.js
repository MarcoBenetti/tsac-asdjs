/*
Caricato con WS
Esercizio 1
Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo
*/
// Iterative
// Spazio: O(1) 
// Tempo: O(n)
function sumwhileneg(myarray) {
    var tot = 0;
    for(i = 0; i < myarray.length; ++i) {
        var x = myarray[i];
        if (x > 0) {
            tot += x;
        } else {
            return tot;
        }
    }
    return tot;
}


// Ricorsive
// Spazio: O(n) 
// Tempo: O(n)
function sumwhilenegR(myarray) {
    if (myarray.length == 0 || myarray[0] < 0) {
        return 0;
    } else {
        return myarray[0] + sumwhilenegR(myarray.slice(1));
    }
}

// Per Tiziano.
function ex_1_I(myarray) {
    return sumwhileneg(myarray);
}

function ex_1_R(myarray) {
    return sumwhilenegR(myarray);
}

/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/
// Spazio: O(1) 
// Tempo: O(n)
function firstOdd(n) {
    var tot = 0;
    for(i = 0; i < n; ++i) {
        tot += 1 + 2 * i;
    }
    return tot;
}


// Spazio: O(n) 
// Tempo: O(n)
function firstOddR(n) {
    if (n == 0) {
        return 0;
    } else {
        return 2 * n - 1 + firstOddR(n - 1);
    }
}


//Esercizio 3

function f3(arr) //aggiungere controllo 10 elementi se necessario
{
    var sum = 0;
    for(i=0; i<10; i++)
        sum += arr[i];

    return sum/arr.length;
}

//Esercizio 3 ricorsivo

function f3r(arr)
{
    function sumArr(arr)
    { 
        if(arr.length == 0)
        {
            return 0;
        } else {
            return arr[0] + sumArr(arr.slice(1));
        }
    }

    return sumArr(arr) / arr.length;
}

//Esercizio 4 iterativo

function f4(a, b)
{
    var tot = 0;
    if(b<a)
    {
        for(b; b<=a; b++)
            tot += b;
    }
    else
    {
        for(a; a<=b; a++)
            tot += a;
    }
    return tot;
}

//Esercizio 4 ricorsivo

function f4r(a, b)
{
    if(a==b)
        return a;
    else
    {
        if(a<b)
            return a + f4r(a+1, b);
        else
            return b + f4r(a, b+1);
    }
}

//Esercizio 5 iterativo

function f5(a,b)
{
    var tot = 0;
    for(i=0; i<b; i++)
        tot += a;
    return tot;
}

//Esercizio 5 ricorsivo

function f5r(a,b)
{
    if(b==0||a==0)
        return 0;
    else
        return a + f5r(a,b-1);
}

//Esercizio 6 iterativo

function f6(a,b)
{
    var tot = 0;
    for(i = 0; tot < a ; i++)
    {
        tot+=b;
    }
    lol = [i-1,a-tot+b];
    return lol;
}

//Esercizio 6 ricorsivo

function f6r(a, b){
    if(a < b)
    {
        return [0, a];
    } else {
        var result = f6r(a - b, b);
        return [result[0]+ 1, result[1]];
    }
}

//Esercizio 7 iterativo

function f7(a,b)
{
    var tot = 1;
    for(i=0;i<b;i++)
        tot = tot*a//f5(tot,a); non funzia...
    return tot;
}

//Esercizio 7 ricorsivo

function f7r(a,b)
{
    if(b==0)
        return 1;
    else
        return a * f7r(a,b-1);//return f5r(a, f7r(a,b-1));
}

//Esercizio 8 iterativo: la matrice cristoddio

function ex_8_I(myarray)
{
    var m = [];
    var n = Math.sqrt(myarray.length);
    for(var row = 0; row < n; row++)
    {
        m[row] = myarray.slice(row * n, (row+1) * n )
    }
}

//Esercizio 8 ricorsivo




//Esercizio 9 iterativo -> reverse array
function ex_9_I(x)
{
    var rt = [];
    var j = 0;
    for(var i = x.length -1; i >= 0; i--)
    {
        rt[j] = x[i];
        j++;
    }
    return rt;
}

//Esercizio 9 ricorsivo

function ex_9_R(arr)
{
    var newArr = [];
    function bodyF(arr, newArr)
    {
        if(arr.length == 0) {
            return 0;
        } else {
            newArr.push(arr[arr.length-1]);
            arr.slice(0, arr.length-2);
            return bodyF(arr, newArr);
        }
    }
    return newArr;
}


//Esercizio 10 iterativo (N elementi M)

function arrayFillerI (n, m)
{
    var arr = [];
    for(var i = 0; i < m; i++)
    {
        arr.push(n);
    }
    return arr;
}

//Esercizio 10 ricorsivo

function arrayFillerR(num, cont)
{
    var ret = [];
    function recall(arr, n, m)
    {
        if(n == arr.length)
        {
            return arr;
        } else {
            arr.push(m);
            recall(arr, n, m);
        }
    }
    recall(ret, num, cont);
    return ret;
}

//Esercizio 11 iterativo -> ordina un array ocn prima dispari e poi pari

function arrayOrder(arr)
{
    var newArr = [];
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] % 2 != 0)
        {
            newArr.push(arr[i]);
        }
    }
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] % 2 == 0)
        {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


// Per Tiziano.
function ex_2_I(x) {
    return firstOdd(x);
}

function ex_2_R(x) {
    return firstOddR(x);
}

function ex_3_I(x){
    return f3(x);
}

function ex_3_R(x){
    return f3r(x);
}

function ex_4_I(x,y){
    return f4(x,y);
}

function ex_4_R(x,y){
    return f4r(x,y);
}

function ex_5_I(x,y){
    return f5(x,y);
}

function ex_5_R(x,y){
    return f5r(x,y);
}

function ex_6_I(x,y){
    return f6(x,y);
}

function ex_7_I(x,y){
    return f7(x,y);
}

function ex_7_R(x,y){
    return f7r(x,y);
}

function ex_10_I(a,b){
    return arrayFillerI(a,b);
}

function ex_10_R(a,b){
    return arrayFillerR(a,b);
}

function ex_11_I(x) {
    return arrayOrder(x);
}

