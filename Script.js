//numberという配列を持たせてその中の要素が全部0(ライツアウトでいう消灯)になったら終了
let number = number(16);
let n;
let choice;

for (let n = 0; n <16; n++){
    number(n)=1;
}

while (1){
    
    if(number(0)===0 &&
       number(1)===0 &&
       number(2)===0 &&
       number(5)===0 && 
       number(6)===0 && 
       number(7)===0 && 
       number(9)===0 && 
       number(10)===0 && 
       number(11)===0){
       break; 
    }
}