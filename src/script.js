function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key)
    if(!audio) return; //impede que as funções funcionem juntas de uma só vez
    audio.currentTime = 0; //retorna para o início
    audio.play();
    key.classList.add('playing');
};

function removeTransition(e){
    if(e.propertyName !== 'transform') return; //pula caso não seja um transform
    this.classList.remove('playing'); //remove o efeito de transição da
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);