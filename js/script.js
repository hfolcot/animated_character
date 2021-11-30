import { Character } from '/littlewalker/js/character.js';

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const infoInner = document.getElementById('info-inner');

canvas.width = 800;
canvas.height = 300;

let frame = 0;

const charImg = new Image();
charImg.src = 'img/rincewind.png';
const character = new Character(charImg, 48, 32, 1, canvas.width, canvas.height);
infoInner.style.height = canvas.height - (character.spriteHeight * 2) + 'px';
infoInner.style.marginRight = character.spriteWidth + 'px';
infoInner.style.marginLeft = character.spriteWidth + 'px';
infoInner.style.marginTop = character.spriteHeight + 'px';
infoInner.style.marginBottom = character.spriteHeight + 'px';

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    character.update(frame);
    character.draw(ctx);
    requestAnimationFrame(animate);
    frame++;
}

requestAnimationFrame(animate);

window.addEventListener('resize', function () {

    canvas.width = 800;
    canvas.height = 300;
    infoInner.style.height = canvas.height - (character.spriteHeight * 2) + 'px';

})