let a,r,p
function prime(a){
    for(p=2;p<a;p++){
       if(r%p==1){
        document.writeln("true");
   }
       else{
        document.writeln("false");
       }

    }
    return ;
}
let total=prime(4);
document.writeln(total)