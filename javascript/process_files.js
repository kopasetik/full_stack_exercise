const fs = require("fs");
const path = require("path");

const BOOK_DIR = "../books";

function processString(string) {
  return string
    .replace(/[^A-Za-z]/gi, " ")
    .toLocaleLowerCase()
    .split(" ");
}

function readBooks() {
  const files = fs.readdirSync(BOOK_DIR);
  return files.reduce((bookWithData, file) => {
    bookWithData[file] = processString(
      fs.readFileSync(path.join(BOOK_DIR, file), "utf8")
    );
    return bookWithData;
  }, {});
}

exports.readBooks = readBooks;
exports.processString = processString;
