//const nums = [ 20,21,22,23, 100, 101, 10, 11, 12,103]  
const nums = [ 100, 101, 10, 11, 102 ]  

function descobreSeq(nums){

    let set = new Set(nums);
    let comecaNo = 0;

    let TotalSet = set.size;
    let percorridos = 0; 

    let maiorConsecutivo = 0 ;
    let consecutivoAtual = 0 ;
    
    for (let num of set) {

        percorridos += 1;
        let atual = num;
        
        let anterior = atual - 1;
        let foundAnterior = set.has(anterior);
        if(!foundAnterior){

            console.log(`Numero atual: ${atual} INICIA SEQUÊNCIA`);

            let proximo = atual + 1;
            let foundProximo = set.has(proximo);
            if (foundProximo){

                console.log(`    Verificou que existe o proximo valor (${proximo}) na Lista `);

                consecutivoAtual = 2
                proximo += 1

                console.log(`    Soma +1 no Consectivo Atual: ${consecutivoAtual} | Proximo ${proximo}`);

                while ( set.has( proximo ) ){ 
                    consecutivoAtual += 1
                    proximo += 1                    
                    console.log(`    Soma +1 no Consectivo Atual: ${consecutivoAtual} | Proximo ${proximo}`);
                }                

                console.log(`    Não encontrou o Proximo ${proximo} na Lista, agora verifica os Maiores Consecutivos:`);

                if (consecutivoAtual > maiorConsecutivo){
                    maiorConsecutivo = consecutivoAtual
                    comecaNo = atual          
                }    

                console.log(` Achou Anterior? ${foundAnterior} \n Percorridos: ${percorridos} \n Restam: ${TotalSet - percorridos} \n consecutivoAtual: ${consecutivoAtual} \n maiorConsecutivo: ${maiorConsecutivo} \n Maior seq Começa no: ${comecaNo}  \n`);
            }
        }else{
            console.log(`Numero atual: ${atual} NÃO Inicia Sequência. \n`);
        }

        if( maiorConsecutivo >= TotalSet - percorridos){
            console.log(`Código não precisa mais percorrer, pois o "Restante à Percorrer" da Lista (${TotalSet - percorridos})  já IGUAL que a Nossa Maior Sequencia Consecutiva (${maiorConsecutivo})!`);
            break;
        }    
    }

    return maiorConsecutivo
}

let maiorSeq = descobreSeq(nums)
console.log(maiorSeq);


//console.log(`    consecutivoAtual ${consecutivoAtual} do ${atual}, pois é o proximo é ${proximo}, foundProximo ${foundProximo}`);  