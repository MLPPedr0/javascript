let valores = [8,2,3,5,4,7,1,6,9]
valores.sort()



/*
for(let pos=0; pos<valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/



for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}