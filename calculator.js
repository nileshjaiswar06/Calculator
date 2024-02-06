      //let Calculation1 = JSON.parse(localStorage.getItem('Calculation'));
      let Calculation = '';

      function updatecalculation(button){
        if(button){
        Calculation += button;
        console.log(Calculation);
        }
      }
      
      //localStorage.setItem('Calculation',JSON.stringify(Calculation));