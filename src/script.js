window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key)
    if(!audio) return; //impede que as funções funcionem juntas de uma só vez
    audio.currentTime = 0; //retorna para o início
    audio.play();
    key.classList.add('playing');
});