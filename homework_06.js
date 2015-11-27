/**
 * Created by Marco on 27/11/2015.
 */

/*
 Implementare la parte merge, dati 2 array ordinati creare un nuovo array ordinato unendoli
 -->> nome merge() file homework_06.js
 */

function merge(ar1, ar2)
{
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
    return robaToBeReturned;
}