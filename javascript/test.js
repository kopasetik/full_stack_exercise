const process = require("./process_files");
const { solution } = require("./solution");
const { expect } = require("@jest/globals");

test("test against simple data set", () => {
  // This simple data set is constructed to have really clear top words.
  const data = Object.entries({
    "unique sentence":
      "Unique words are the only ones that should appear because they are unique.",
    "common sentence":
      "Common words shouldn't appear at all. Because they are common.",
    "rare sentence": "Rare words are the most valuable. Because they are rare.",
  }).reduce((processedData, [key, value]) => {
    processedData[key] = process.processString(value);
    return processedData;
  }, {});
  const output = solution(data, 1);
  const answer = {
    "unique sentence": ["unique"],
    "common sentence": ["common"],
    "rare sentence": ["rare"],
  };
  expect(output).toEqual(answer);
});

test("test against books", () => {
  const data = process.readBooks();
  const output = solution(data, 10);
  const answer = {
    "A Doll's House.txt": [
      "nora",
      "helmer",
      "linde",
      "krogstad",
      "torvald",
      "christine",
      "nils",
      "goodnight",
      "skylark",
      "tarantella",
    ],

    "A Modest Proposal.txt": [
      "publick",
      "breeders",
      "kingdom",
      "hath",
      "infants",
      "jonathan",
      "computed",
      "landlords",
      "carcass",
      "annum",
    ],

    "A Tale of Two Cities.txt": [
      "lorry",
      "defarge",
      "manette",
      "pross",
      "carton",
      "darnay",
      "lucie",
      "cruncher",
      "monsieur",
      "monseigneur",
    ],

    "Alice's Adventures in Wonderland.txt": [
      "alice",
      "turtle",
      "hatter",
      "gryphon",
      "dormouse",
      "caterpillar",
      "mouse",
      "dinah",
      "cats",
      "dodo",
    ],

    "Frankenstein.txt": [
      "clerval",
      "justine",
      "felix",
      "geneva",
      "frankenstein",
      "safie",
      "elizabeth",
      "agatha",
      "mountain",
      "mon",
    ],

    "Metamorphosis.txt": [
      "gregor",
      "samsa",
      "grete",
      "charwoman",
      "onto",
      "violin",
      "metamorphosis",
      "alright",
      "broom",
      "immobile",
    ],

    "Pride and Prejudice.txt": [
      "darcy",
      "bennet",
      "bingley",
      "wickham",
      "collins",
      "lydia",
      "lizzy",
      "gardiner",
      "elizabeth",
      "longbourn",
    ],

    "The Adventures of Sherlock Holmes.txt": [
      "holmes",
      "sherlock",
      "lestrade",
      "rucastle",
      "mccarthy",
      "inspector",
      "coronet",
      "clair",
      "hosmer",
      "turner",
    ],

    "The Great Gatsby.txt": [
      "gatsby",
      "jordan",
      "tom",
      "daisy",
      "wolfshiem",
      "garage",
      "myrtle",
      "buchanan",
      "michaelis",
      "wilson",
    ],

    "The Importance of Being Earnest.txt": [
      "algernon",
      "cecily",
      "gwendolen",
      "bracknell",
      "prism",
      "worthing",
      "chasuble",
      "bunbury",
      "merriman",
      "cardew",
    ],
  };
  expect(output).toEqual(answer);
});
