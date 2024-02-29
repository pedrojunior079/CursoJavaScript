function classificarTemperatura(temperatura){
  if(temperatura < 15){
    console.log("Frio");
  }else if(temperatura >= 15 && temperatura <= 25){
    console.log("Agradavel");
  }else if(temperatura >= 26 && temperatura <= 35){
    console.log("Quente");
  }else{
    console.log("Muito Quente");
  }  
}

classificarTemperatura(10);