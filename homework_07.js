/**
 * Created by Marco on 01/12/2015.
 */

//ricorsione su vettore -> return 10 if a is empty (caso base)
//5*a[0] + function(a[1]) ecc.

function t(myarray){
    if(myarray.length == 0){
        return 10;
    } else {
        return 5 * myarray[0] + t(myarray.slice(1));
    }
}
//complessità O(n)

//somma quadrati elementi pari
function sumSquareEven(myarray){
    if(myarray.length == 0){
        return 0;
    } else {
        if(myarray[0] % 2 == 0){
            return Math.pow(myarray[0], 2) + sumSquareEven(myarray.slice(1));
        } else {
            return sumSquareEven(myarray.slice(1));
        }
    }
}
//complessità O(n)

//somma quadrati degli elementi pari
function sumSquareEvenF(myarray){
    return myarray.reduce(function(acc, nextEl){
        if(nextEl % 2 == 0)
            return acc + (nextEl * nextEl);
        else
            return acc;
    }, 0);
}