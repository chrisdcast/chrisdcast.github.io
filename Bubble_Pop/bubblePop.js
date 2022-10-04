const body = document.querySelector('body');
let lastUpdate = Date.now();
let timeInterval = setInterval(updateGame, 25);
let bubSpawnTimer = 0;

const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
                'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
                'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
                'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8',
                '9', '0'];

function createBubble() {
    // Determine random height and width of bubble
    const newWidth = (Math.floor(Math.random() * 60) + 45);

    // Determine random X coordinate for bubble to spawn
    let newX = Math.floor(Math.random() * 85);

    //Create bubble HTML elements
    bubbleContainer = document.createElement('div');
    let bubbleSpec = document.createElement('div');
    bubbleContainer.classList.add('bubbleContainer');
    bubbleSpec.classList.add('bubbleSpec');
    let bubbleChar = document.createElement('div');
    bubbleChar.classList.add('bubbleChar');
    bubbleChar.innerText = characters[Math.floor(Math.random() * characters.length)];

    bubbleContainer.appendChild(bubbleSpec);
    bubbleContainer.appendChild(bubbleChar);
    body.appendChild(bubbleContainer);

    //Update default pupple element parameters
    bubbleContainer.style.left = `${newX}vw`;
    bubbleContainer.style.top = '125vh';
    bubbleContainer.style.width = `${newWidth}px`;
    bubbleContainer.style.height = `${newWidth}px`;
    bubbleSpec.style.width = `${newWidth / 5}px`;
    bubbleSpec.style.height = `${newWidth / 5}px`;
    bubbleSpec.style.top = `${newWidth / 5}px`;
    bubbleSpec.style.left = `${newWidth / 5}px`;

    // Add click listener;
    bubbleContainer.addEventListener('mousedown', popBubble);
}

function popBubble(event) {
    if (event.target.classList.contains('bubbleContainer')){
        try {
            event.target.classList.add('bubblePopped');
            setTimeout(() => {
                body.removeChild(event.target);
            }, 2000);
        }
        catch (error) {
            console.log(error);
        }
    }
    else
    {
        try {
            event.target.parentElement.classList.add('bubblePopped');
            setTimeout(() => {
                body.removeChild(event.target.parentElement);
            }, 2000);
        }
        catch (error) {
            console.log(error);
        }
    }

    bubbleRect = event.target.getClientRects();
    //Create some bubble droplets
    for (let i = 0; i < 4; i++){
        let droplet = document.createElement('div');
        droplet.classList.add('bubbleDrop');

        body.appendChild(droplet);

        let spawnX = bubbleRect[0].left + (bubbleRect[0].width / 2);
        let spawnY = bubbleRect[0].top + (bubbleRect[0].height / 2);
        let randomRotation = Math.floor(Math.random() * 360);

        droplet.style.left = `${spawnX}px`;
        droplet.style.top = `${spawnY}px`;
        // droplet.style.transform = `rotate(${randomRotation}deg)`;

        setTimeout(() => {
            body.removeChild(droplet);
        }, 500)
    }
}

function updateGame() {
    //Calculate time delta
    let now = Date.now();
    let timeDelta = now - lastUpdate;
    lastUpdate = now;

    //Check bubble timer.
    // If yes, spawn new bubble reset time
    // If no, subtract delta time from timer.
    if (bubSpawnTimer <= 0){
        createBubble();

        bubSpawnTimer = (Math.random() * 2000) + 500;
    }
    else
    {
        bubSpawnTimer -= timeDelta;
    }

    const bubbleList = document.querySelectorAll('.bubbleContainer');

    for (let i = 0; i < bubbleList.length; i++){
        let initialY = parseFloat(bubbleList[i].style.top);
        initialY -= (15 * timeDelta) / 1000;
        bubbleList[i].style.top = `${initialY}vh`;

        if (initialY <= -70){
            body.removeChild(bubbleList[i]);
        }
    }
}