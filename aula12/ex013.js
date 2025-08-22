var agora = new Date()
var dia = agora.getDay()
/*   
 0 = Domingo
 1 = Segunda
 2 = Terça
 3 = Quarta
 4 = Quinta
 5 = Sexta   
 6 = Sábado



*/
console.log(`Hoje é `)

switch(dia) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('segunda-feira')
        break
    case 2:
       console.log('terça-feira')
        break
    case 3:
        console.log('quarta-feira')     
        break
    case 4: 
        console.log('quinta-feira')
        break
    case 5:
        console.log('sexta-feira')  
        break
    case 6: 
        console.log('sábado')
        break   
    default:
        console.log('Dia inválido') 
        break
    }
