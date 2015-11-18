
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

function ex_2_F(n)
{
    var arr = [];
    for(var i = 0; i < n; i++)
    {
        arr.push(i);
    }
    ar2 = arr.map(function (x) {if(x%2!=0) return x; else return 0;});
    console.log(ar2);
    return ar2.reduce(function (c,d){return c+d});
}

function ex_3_F(arr){
    return arr.reduce(function (c,d){return c+d})/arr.length;
}

function ex_4_F(a, b){
    var arr = [];
    if(a>b)
    {
        var t = a;
        a = b;
        b = t;
    }
    for(var i = a; i < b; i++)
    {
        arr.push(i);
    }
    return arr.reduce(function (c,d){return c+d});
}

function ex_5_F(a,b)
{
    for(var i = a; i < b; i++)
    {
        arr.push(a);
    }
    return arr.reduce(function (c,d){return c+d});
}

function ex_6_F(a, b){

}

function ex_7_F(a,b)
{
    for(var i = a; i < b; i++)
    {
        arr.push(a);
    }
    return arr.reduce(function (c,d){return c*d});
}
