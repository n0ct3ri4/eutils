#!/usr/bin/env node

/**
 * @author L'Ange Déchu <contact.nocteria@gmail.com>
 * @description Echo OS Systems installer.
 * @license GPL-3.0
 */

/**
 * Codes d'erreur :
 *  (10) Installation invalide. Veuillez réinstaller Echo OS.
 *
 *  (11) Arguments d'exécution invalides.
 *  (12) Cet utilitaire n'existe pas.
 */

const process = require("node:process");
const fs = require("node:fs");
const path = require("node:path");
const https = require("node:https");
const unzipper = require("unzipper");
const args = process.argv;

var utilsPath = path.join("\\.eos", "utils"); // path to utils
var debug = false; // debug mode. setting this to `true` allows you to view extra logs

// if path to utils doesn't exists
if (!fs.existsSync(utilsPath)) {
  console.error(
    new Error("(10) Installation invalide. Veuillez réinstaller Echo OS") // error 10
  );
  return process.exit(10);
}

// if process not launched using the right arguments
if (!args[1]) {
  console.error(
    new Error(
      "(11) Vous devez spécifier le nom de l'utilitaire que vous souhaitez installer." // error 1
    )
  );
  return process.exit(1);
}

var cache = path.join(__dirname, "..", "cache"); // cache directory
var writeStream = fs.createWriteStream(path.join(cache, `${Date.now()}.zip`)); // creates a write stream for download output

// https request to official EOS cdn
https.request(new URL(`https://wlvs.fr/eos/${args[1]}`), (res) => {
  // if file not found on the cdn
  if (res.statusCode === 404) {
    console.error(
      new Error(
        "(12) Cet utilitaire n'existe pas." // error 1
      )
    );
    return process.exit(2);
  } else {
    res
      .on("data") // listen for data
      .pipe(writeStream) // pipe it to the write stream
      // when piping finished
      .on("finish", () => {
        // close write stream
        writeStream.close((err) => {
          debug ? console.log("Successfully piped to the cache file.") : null; // debug only
        });
      });

    // when request ends
    res.on("end", () => {
      debug ? console.log("Request ended.") : null; // debug only
    });

    // when request closes
    res.on("close", () => {
      debug ? console.log("Request ended.") : null; // debug only

      // extract downloaded zip to utils folder
      fs.createReadStream(path.join(cache, fs.readdirSync(cache)[0]))
        .pipe(unzipper.Extract({ path: path.join(utilsPath, args[1]) }))
        // on extract ends
        .on("end", () => {
          debug ? console.log("Extraction ended.") : null; // debug only
          console.log(`Successfully installed ${args[1]}`);
          return process.exit(0);
        });
    });
  }
});
