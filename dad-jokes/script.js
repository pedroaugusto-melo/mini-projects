const btnNewJoke = document.getElementById('newJoke');
const joke = document.getElementById('joke');

handleClick();
btnNewJoke.addEventListener('click', handleClick);

async function handleClick() {
    let randomJoke = '';

    do {
        randomJoke = await getRandomJoke();
    } while(randomJoke === 'ERROR');

    while (randomJoke.length > 100) {
        randomJoke = await getRandomJoke();
    }

    joke.innerHTML = randomJoke;
    
}

async function getRandomJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');

        if(response.ok){
            const jsonResponse = await response.json();
            
            return jsonResponse.joke;
        }
    } catch (error) {
        return 'ERROR';
    }
}

