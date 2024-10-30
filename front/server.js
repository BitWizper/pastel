const express = require('express');
const path = require('path');
const app = express();

// Carpeta que contiene los archivos estáticos del frontend (index.html, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta específica para pedidos
app.get('/pedidos', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pedidos.html'));
});

// Ruta principal para index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Puerto en el que correrá el servidor de frontend
const PORT = process.env.PORT || 4000;

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor de frontend corriendo en http://localhost:${PORT}`);
});
