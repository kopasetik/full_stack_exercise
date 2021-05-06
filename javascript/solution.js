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
 * @param  {Object} documents  An object with keys of the document names.
 *  The values are arrays of every word in the document.
 * @param  {Integer} numberOfTopWords  The number of top words to return.
 * @returns {Object} An object with keys of the document names, and
 * values of arrays of the top words.
 */
function solution(
			documents, 
			numberOfTopWords
		) {

	// TFIDF ingredients
	// ingredient -  number of documents (comes from docDict.length)

	// ingredient - number of documents with word (comes from docDict.filter)

	// ingredient - count of word in document (comes from doc 

	// ingredient - list of words (create a dictionry from array of words)
	
	var docDict = Object.keys(documents)
	var docValues = Object.values(documents)

	/* var tableOfContents = docDict.reduce( (acc, curr, idx) => {
		if (idx > 0) return [...acc, curr.length + acc[acc.length-1]]	
		return [curr.length]
	}, [])*/
	
	var tableOfContents = docValues.reduce( (acc, curr, idx) => {
		if (idx == 0) return [0]	
		return [...acc, acc[acc.length-1] + curr.length]
	}, [])

	function zip(docArr, pageArr){
		return docArr.map((el, idx) => ({document: el, lastIndex: pageArr[idx]}))
	}
	
	var zippedContents = zip(docDict, tableOfContents)

	// get list of documents
	const allWords = docDict.reduce( (acc, curr) => {
			if (acc.length > 0) return [...acc, ...(documents[curr])]
			return documents[curr]
			}, []).map(word => word.toLowerCase())
	const wordSet = new Set(allWords)
	const decoratedWords = allWords.reduceRight((acc, curr, idx) => {
		if (idx == 0) return [{word: curr, document: docDict[0]}, ...acc]
		var zLen = zippedContents.length
		if (idx == zippedContents[zLen - 1]['lastIndex']) zippedContents.pop() && zLen-- 
		return [{word: curr, document: docDict[zLen-1]}, ...acc]
	}, [])

 //   1) Count how many times a word appears in each document.

	const countedWords = decoratedWords.reduce((acc, {document, word}) => {
		if (!acc[document]) {
			acc[document] = {}
			acc[document][word] = 1
			return acc
		}
		if (acc[document] && !acc[document][word]) {
			acc[document][word] = 1
			return acc
		}
		if (acc[document][word]) acc[document][word]++
		return acc

	}, {})
	
	return countedWords

	const wordDict = Array.from(wordSet).reduce((acc, curr) => ({...acc, [curr]: 0}), {})	

	var _ = allWords.map(word => wordDict[word]++)
	
	return wordDict

 //   2) Calculate the TFIDF for each word in each document.
 //  @param  {Integer} numberOfDocuments  The number of documents you're considering.

 // @param  {Integer} numberOfDocumentsWithWord  The number of documents that contain the word
 // you calculating TFIDF for.
	const has = (doc, word) => (countedWords[doc][word])
 	//.filter(/*predicate*/).length

 //@param  {Integer} countOfWordInDocument  The number of times the word appears in the document
 //you're calculating TFIDF for.
	//countedWords[document][word] 
	

 //   3) Return the numberOfTopWords words with the highest TFIDF score.
}

exports.solution = solution;
