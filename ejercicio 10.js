let ARRAY= [1,2,3,4,5]
let SUMA=0
for( let i=0; i<ARRAY.length;i++){
    if(ARRAY[i]%2==0){
        SUMA=SUMA+ARRAY[i]
    }
}
console.log("La suma de los elementos pares del array es:", SUMA);
