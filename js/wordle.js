document.addEventListener("DOMContentLoaded", () => {
    createSquares();
    getNewWord();

    let guessedWords = [[]];
    let availableSpace = 1;

    let word;
    let guessedWordCount = 0;

    const keys = document.querySelectorAll(".keyboard-row button");

    function getNewWord() {
        fetch(
            `https://wordsapiv1.p.rapidapi.com/words/?random=true&lettersMin=5&lettersMax=5`,
            {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
                    "x-rapidapi-key": "<YOUR_KEY_GOES_HERE>",
                },
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((res) => {
                word = res.word;
            })
            .catch((err) => {
                console.error(err);
            });
    }
}
