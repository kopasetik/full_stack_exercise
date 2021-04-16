/**
 * This function returns the calculation of "Term Frequency Inverse Document Frequency"
 * or TFIDF.
 *
 * Given a set of documents, TFIDF is a measure of how frequent a particular word (or term) is
 * in any specific document within that set.
 * @param  {Integer} numberOfDocuments  The number of documents you're considering.
 * @param  {Integer} numberOfDocumentsWithWord  The number of documents that contain the word
 * you calculating TFIDF for.
 * @param  {Integer} countOfWordInDocument  The number of times the word appears in the document
 * you're calculating TFIDF for.
 */
function calculateTFIDF(
  numberOfDocuments,
  numberOfDocumentsWithWord,
  countOfWordInDocument
) {
  return (
    Math.log(numberOfDocuments / numberOfDocumentsWithWord) *
    Math.log(countOfWordInDocument)
  );
}

/**
 * Put your solution here
 *
 * Given a set of documents, and the number of top words to
 * calculate, this function should return the number of top words for
 * each document. To calculate the top words you should
 *   1) Count how many times a word appears in each document.
 *   2) Calculate the TFIDF for each word in each document.
 *   3) Return the numberOfTopWords words with the highest TFIDF score.
 * @param  {Object} documents  An object with keys of the document names.
 *  The values are arrays of every word in the document.
 * @param  {Integer} numberOfTopWords  The number of top words to return.
 * @returns {Object} An object with keys of the document names, and
 * values of arrays of the top words.
 */
function solution(documents, numberOfTopWords) {
  return { "document title": ["top word 1", "top word 2"] };
}

exports.solution = solution;
