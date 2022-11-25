const webpack = require("webpack");
const path = require("path");

const config = {

    // Fichier principal de l'application (point d'entrée)
    entry: "./src/index.js",

    // Definition de la sortie WebPack
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "bundle.js"
    }
};

module.exports = config;