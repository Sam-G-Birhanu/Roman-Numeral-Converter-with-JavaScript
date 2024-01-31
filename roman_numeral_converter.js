let roman = '';
function convertToRoman(number) {
  let digits = number.toString().split("").length;
  let arrNum = number.toString().split("");
  console.log(arrNum)
  let diff = 0; let half = 0; let final = [];let main = ''; let middle = ''; let less=0; let less2=0;

while(digits>0){

if(digits == 4){
  diff = 1000; half = 5000; main ='M';middle = 'V';less ='IV'; less2 = 'IX';
  let num = (arrNum[arrNum.length - 4]) * (10 ** (digits-1));
  let thou = thousands(diff, half, num, main ,middle,less,less2);
     digits = digits-1;
     final.push(thou)
     console.log(thou);
}

  if(digits == 3){
 diff = 100; half = 500; main ='C';middle = 'D';less ='CD'; less2 = 'CM';
    let num = (arrNum[arrNum.length - 3]) * (10 ** (digits-1));
     let hun = huns(diff, half, num, main ,middle,less,less2);
     digits = digits-1;
          final.push(hun)
      console.log(hun)
  
}
if(digits == 2){
  diff = 10; half = 50; main ='X';middle = 'L';less ='XL'; less2 = 'XC'
    let num = (arrNum[arrNum.length - 2]) * (10 ** (digits-1));
    let ten = tens(diff, half, num, main ,middle,less,less2);
         final.push(ten)
console.log(ten);
digits = digits-1;
num = number % 10;
}

if(digits == 1){
  
  diff = 1; half = 5; main ='I';middle = 'V';less ='IV'; less2 = 'IX'
    let num = (arrNum[arrNum.length - 1]) * (10 ** (digits-1));
  let one = ones(diff, half, num, main ,middle,less,less2);
       final.push(one)

  console.log(one)
  digits= digits-1
}
let romNum = final.join("").toString();
console.log(romNum)
return romNum;
}


// changer functions
function ones(difference, halff, numm, mainn ,middlee,lesss,less22){
roman = middlee;
if(numm == halff){
  roman = middlee;
  return roman;
}
else if(numm > halff && numm < 9){
  difference = numm - 5;
  for(let i = 0;i<difference;i++){
    roman = roman + mainn;
  }
  return roman;
}
else if(numm< 4 && numm>0){
  roman = '';
  for(let i = 0; i< numm ; i++){
    roman = roman + mainn;
  }
  return roman;
  }
  else if(numm==9){
    roman = less22;
    return roman;
  }
else if(numm==4){
    roman = lesss;
    return roman;
  }
}

// tens
function tens(difference, halff, numm, mainn ,middlee,lesss,less22){
roman = middlee;
if(numm == halff){
  roman = middle;
  return roman;
}
else if(numm > halff && numm < 90){
  difference = numm -50;
  for(let i = 0;i<difference;i+=10){
    roman = roman + mainn;
  }
  return roman;
}
else if(numm< 40 && numm>0){
  roman = '';
  for(let i = 0; i< numm ; i+=10){
    roman = roman + mainn;
  }
  return roman;
  }
  else if(numm==90){
    roman = less22;
    return roman;
  }
else if(numm==40){
    roman = lesss;
    return roman;
  }
}
//

// huns
function huns(difference, halff, numm, mainn ,middlee,lesss,less22){
roman = middlee;
if(numm == halff){
  console.log("hun")
  roman = middle;
  return roman;
}
else if(numm > halff && numm < 900){
  difference = numm -500;
  for(let i = 0;i<difference;i+=100){
    roman = roman + mainn;
  }
  return roman;
}
else if(numm< 400 && numm>0){
  roman = '';
  for(let i = 0; i< numm ; i+=100){
    roman = roman + mainn;
  }
  return roman;
  }
  else if(numm==900){
    roman = less22;
    return roman;
  }
else if(numm==400){
    roman = lesss;
    return roman;
  }
}
//

// thou
function thousands(difference, halff, numm, mainn ,middlee,lesss,less22){
roman = middlee;
if(numm == halff){
  roman = middle;
  return roman;
}
else if(numm > halff && numm < 9000){
  difference = numm -500;
  for(let i = 0;i<difference;i+=1000){
    roman = roman + mainn;
  }
  return roman;
}
else if(numm< 4000 && numm>0){
  roman = '';
  for(let i = 0; i< numm ; i+=1000){
    roman = roman + mainn;
  }
  return roman;
  }
  else if(numm==9000){
    roman = less22;
    return roman;
  }
else if(numm==4000){
    roman = lesss;
    return roman;
  }
}
}


convertToRoman(3999);
