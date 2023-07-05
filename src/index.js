
async function getGames() {
    const response = await fetch('http://localhost:3000/game');
    const jsonData = await response.json();

    console.log(jsonData);

}

getGames();