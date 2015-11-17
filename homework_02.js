
function ex_1_F (ar)
{

    var a = 0;

    function f(x)
    {
        if(x>0)
        {
            a += x;
            return true;
        }
        else
          return false;
    }
    
    
    ar.every(f);
    return a;
}

function ex_3_F(arr)
{
     ar2 = arr.map(function (x) {if(x%2!=0) return x; else return 0;});
     console.log(ar2);
     return ar2.reduce(function (c,d){return c+d});
}

function ex_3_F(arr){
    return arr.reduce(function (c,d){return c+d})/arr.length;
}
