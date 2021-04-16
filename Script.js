//numberという配列を持たせてその中の要素が全部0(ライツアウトでいう消灯)になったら終了
let number = number(16);
let n;
let choice;

const change = document.getElementById('boxa');
console.log(change);
    change.addEventListener('click', () => {
     change.classList.toggle('font-color');
    });