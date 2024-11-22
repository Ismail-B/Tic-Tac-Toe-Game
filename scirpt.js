let fields = [
    null,
    'circle',
    'cross',
    null,
    null,
    null,
    null,
    null,
    null,
]

function render() {
    // Referenz zum Spielbereich holen
    const gameArea = document.getElementById("game-area");
    // Den inneren HTML-Inhalt des Spielbereichs zurücksetzen
    gameArea.innerHTML = "";

    // Hinzufügen der CSS-Klasse für das Spielfeld
    gameArea.className = "tic-tac-toe-grid";

    // Felder generieren
    for (let i = 0; i < fields.length; i++) {
        // Neues Div für jedes Feld erstellen
        let fieldDiv = document.createElement("div");
        fieldDiv.className = "field";

        // Inhalt je nach Wert des Arrays setzen
        if (fields[i] === "circle") {
            fieldDiv.innerHTML = '<div class="circle"></div>';
        } else if (fields[i] === "cross") {
            fieldDiv.innerHTML = '<div class="cross"></div>';
        } else {
            fieldDiv.innerHTML = ""; // Leeres Feld
        }

        // HTML des aktuellen Feldes zum Spielbereich hinzufügen
        gameArea.innerHTML += fieldDiv.outerHTML;
    }
}
