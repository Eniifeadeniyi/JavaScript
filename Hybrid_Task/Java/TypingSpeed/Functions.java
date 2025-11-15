public class Functions {

public static int calculateTimeSpent(int start,int end) {
	return end - start;
}


public static double calculateWordsPerMinute(int time,int numberOfWords) {
	double minutes = time / 60;
	double speed = numberOfWords / minutes;
	return speed;
}

public static double getScorePerWord(String[] expectedWords) {
	double scorePerWord = 100 / expectedWords.length;
	return scorePerWord;
}

public static double calculateAccuracy(double scorePerWord,String[] userInput,String[] expectedWords){
	double score = 0.0;
	for(int count = 0; count < userInput.length; count++){
		if(userInput[count].equals(expectedWords[count])) score += scorePerWord;}
	return score;
}

}