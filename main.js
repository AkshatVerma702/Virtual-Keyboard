document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.key');
    
    document.addEventListener('keydown', (e) =>{
        const pressed = e.key.toUpperCase();
        keys.forEach(key =>{
            if(pressed === key.getAttribute('data-key')){
                key.classList.add('pressed')
            }
        })
    })

    document.addEventListener('keyup', (e) =>{
        const unpressed = e.key.toUpperCase();
        keys.forEach(key =>{
            if(unpressed === key.getAttribute('data-key')){
                key.classList.remove('pressed')
            }
        })
    })
});
