let PALABRA="DADO"
let letrasREPETIDAS= {}
for (let i=0; i<PALABRA.length;i++){
    let LETRA=PALABRA[i]
    if(letrasREPETIDAS[LETRA]){
        letrasREPETIDAS[LETRA]++
    }
    else{letrasREPETIDAS[LETRA]=1
    }
}
    console.log ("las letras de la palabra",PALABRA,"son:")  
    for (let LETRA in letrasREPETIDAS) {
        console.log(LETRA , " = " ,letrasREPETIDAS[LETRA]);
    }