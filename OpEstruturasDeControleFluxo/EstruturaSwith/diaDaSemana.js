function obterNumeroDoDia(dia){
  let diaLowerCase = dia.toLowerCase();
  
  switch(diaLowerCase){
    case "domingo":
        return 1;
    case "segunda-feira":
        return 2;
    case "terça-feira":
        return 3;
    case "quarta-feira":
        return 4;
    case "quinta-feira":
        return 5;
    case "sexta-feira":
        return 6;
    case "sabado":
        return 7; 
    default:
        return "Dia invalido";                           
  }
}

let diaInformado = "quarta-feira";
let numeroDoDia = obterNumeroDoDia(diaInformado);
console.log(`O número correspondente ao dia ${diaInformado} é ${numeroDoDia}.`);