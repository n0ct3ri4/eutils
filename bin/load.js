#!/usr/bin/env node

/**
 * @author L'Ange Déchu <contact.nocteria@gmail.com>
 * @description Eutils Loader.
 * @license GPL-3.0
 */

/**
 * Codes d'erreur :
 *  (10) Installation invalide. Veuillez réinstaller Echo OS.
 *
 *  (1) Arguments d'exécution invalides.
 *  (2) Utilitaire introuvable.
 *  (3) Fichier d'exécution invalide. Fonction `run` introuvable.
 */

const process = require("node:process");
const fs = require("node:fs");
const path = require("node:path");
const os = require("node:os");
const args = process.argv;

var utilsPath = path.join("\\.eutils", "systems"); // path to utils
var debug = false; // debug mode. setting this to `true` allows you to view extra logs

// if path to utils doesn't exists
if (!fs.existsSync(utilsPath)) {
  console.error(
    new Error("(10) Installation invalide. Veuillez réinstaller Echo Utils") // error 10
  );
  return process.exit(10);
}

// if process not launched using the right arguments
if (!args[1]) {
  console.error(
    new Error(
      "(1) Vous devez spécifier le nom de l'utilitaire que vous souhaitez utiliser." // error 1
    )
  );
  return process.exit(1);
}

var requestedUtil = path.join(utilsPath, args[1]);

debug ? console.log(requestedUtil) : null; // debug only

// if requested util doesn't exists
if (!fs.existsSync(requestedUtil)) {
  console.error(
    new Error("(2) Cet utilitaire n'existe pas. Veuillez le télécharger.") // error 2
  );
  return process.exit(2);
}

// if requested util doesn't have `run` function
if (!require(requestedUtil).run) {
  console.error(
    new Error("(3) Fichier d'exécution invalide. Fonction `run` introuvable.") // error 3
  );
  return process.exit(3);
}

// finally run the util
require(requestedUtil).run();
