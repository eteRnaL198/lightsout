const arr = [];
for(let i=0; i<16; i++) {
    const wrapper = document.getElementById('js_box_wrapper');  
    const box = document.createElement('div');

    box.setAttribute('id', `box${i}`);
    (i % 4 === 0) ? box.setAttribute('class', 'hidden'): box.setAttribute('class', 'box box-off');
    arr.push(box);
    box.addEventListener('click', () => {
        (arr[i-4] ? arr[i-4].classList.toggle('box-off') : null );
        (arr[i-1] ? arr[i-1].classList.toggle('box-off') : null );
        (arr[i] ? arr[i].classList.toggle('box-off') : null );
        (arr[i+1] ? arr[i+1].classList.toggle('box-off') : null );
        (arr[i+4] ? arr[i+4].classList.toggle('box-off') : null );

        let flag = 0;
        for(let j=0; j<16; j++) {
            if(j % 4 !== 0 && arr[j].classList.contains('box-off')) {
                flag++;
            }
        }
        console.log(flag);
        if(flag == 1) {
            const message = document.createElement('p');
            message.setAttribute('class', 'message');
            message.innerHTML = 'Completed';
            wrapper.parentNode.insertBefore(message, wrapper);
        }
    });
    
    wrapper.appendChild(box);
}