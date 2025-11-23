def calculateWordsPerMinute(time,numberOfWords):
	minutes = time / 60
	speed = numberOfWords / minutes
	return speed

def getScorePerWord(expectedWords):
	scorePerWord = 100 / len(expectedWords)
	return scorePerWord

def calculateAccuracy(scorePerWord,userInput,expectedWords):
	score = 0
	if len(userInput) <= len(expectedWords):
		for count in range(len(userInput)):
			if userInput[count] == expectedWords[count]:
				score += scorePerWord
	else:
		for count in range(len(expectedWords)):
			if userInput[count] == expectedWords[count]:
				score += scorePerWord
	return score

	

