function showQuote() {
    const quotes = [
        "Power comes to those who will do anything to achieve it. – Mel",
        "Time is not on our side. – Ekko",
        "We were once one tribe. Now, we're just strangers. – Ekko",
        "You can't change the past, but you can learn from it. – Ekko",
        "A council seat comes with many strings attached. – Mel"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    alert(quotes[randomIndex]);
}
