let height = prompt("Combien d'étages veux-tu pour ta piramyde?");
let piramyd = "";

if ((height >= 1 ) && (height <= 25)) {
    while (height > 0) {
        console.log( " ".repeat(height-1)+'#'.repeat(piramyd));
        height--;
        piramyd++;
    }
}