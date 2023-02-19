function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
    );
}

const player = document.querySelector('#player');
const coin = document.querySelector('#coin');
const score = document.querySelector('#scoreUpdate')


player.style.top = "550px";

window.addEventListener('keyup', function (e) {
    if (e.key == 'ArrowDown' || e.key == 'Down') {

        moveVertical(player, 50);

    }
    else if (e.key == 'ArrowUp' || e.key == 'Up') {

        moveVertical(player, -50);

    }
    else if (e.key == 'ArrowRight' || e.key == 'Right') {

        moveHorizontal(player, 50);
        player.style.transform = 'scale(1,1)';

    }
    else if (e.key == 'ArrowLeft' || e.key == 'Left') {

        moveHorizontal(player, -50);
        player.style.transform = 'scale(-1,1)';

    }
    if (isTouching(player, coin)) {
        moveCoin();
        var count = Number(score.innerText)
        count += 1;
        score.innerText = count.toString();
        console.log(count);
    }
})

const moveVertical = (element, amount) => {
    const currentTop = extractPos(element.style.top);
    element.style.top = `${currentTop + amount}px`;
}

const moveHorizontal = (element, amount) => {
    const currentLeft = extractPos(element.style.left);
    element.style.left = `${currentLeft + amount}px`;
}

const moveCoin = () => {
    const x = Math.floor(Math.random() * (window.innerWidth - coin.clientWidth));
    const y = Math.floor(Math.random() * (500 - coin.clientHeight));

    if (x < (window.innerWidth) && y < 500) {
        coin.style.top = `${y}px`;
        coin.style.left = `${x}px`;
    }
}

const extractPos = (pos) => {
    if (!pos) return 0;
    return parseInt(pos.slice(0, -2));
}

moveCoin();