const express = require('express');
const app = express();
const port = 3000;

// EJS als Templating-Engine verwenden
app.set('view engine', 'ejs');

// Variable zum Speichern des Toggle-Zustands
let ledStateOn = false;

// Definieren Sie eine Routen-Handler-Funktion für die Wurzel-URL
app.get('/', (req, res) => {
    res.render('index', { toggleState: ledStateOn });
});

// Routen-Handler-Funktion für den Button
app.post('/button', (req, res) => {
    ledStateOn = !ledStateOn; // Toggle-Zustand umkehren
    console.log('Der Button wurde geklickt! Neuer Zustand:', ledStateOn);
    res.redirect('/'); // Zurück zur Startseite
});

// Routen-Handler-Funktion für die GET-Anfrage zum Abrufen des Zustands
app.get('/ledState', (req, res) => {
    res.send({ ledStateOn });
});

// Starten Sie den Server und hören Sie auf Verbindungen auf dem angegebenen Port
app.listen(port, () => {
    console.log(`Der Server läuft auf http://localhost:${port}`);
});
