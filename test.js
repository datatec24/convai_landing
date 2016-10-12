
var tableau=[1,2,3,4];

var i=0;
function essai(){
    i=i+1;
    j = i % 4;

    console.log(tableau[j])

}

setInterval(essai,1000);
