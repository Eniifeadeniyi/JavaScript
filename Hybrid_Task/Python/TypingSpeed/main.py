from functions import *
import datetime

expected = "I am so tired!"
expectedWords = expected.split(" ")

print(expected)
start = datetime.datetime.now()
sentence = input('Enter the sentence above: ')
end = datetime.datetime.now()
userInput = sentence.split(" ")

scorePerWord = getScorePerWord(expectedWords)
total_time = (end - start).total_seconds()
numberOfWords = len(userInput)

print(f"You spent {total_time:.2f} seconds!")
print(f"Your typing speed is {calculateWordsPerMinute(total_time,numberOfWords):.2f} wpm")
print(f"Your typing accuracy is {calculateAccuracy(scorePerWord,userInput,expectedWords)} %")
