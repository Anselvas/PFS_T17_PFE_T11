let velocidade;
//entrada
velocidade = 50;
//processamento / saida
if (velocidade >110){
    console.log("Você foi multado!")
}
//else if está encadeado...
else 
    {

        if(velocidade >100 && velocidade <110){
         console.log("Você está sendo notificado por andar acima do limite!!")
        }
        //else= se não...
        else{
        console.log("Você está dentro do limite de velocidade!")
        }
    }    
//parei em 1:15 min