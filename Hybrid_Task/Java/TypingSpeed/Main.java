import java.time.LocalTime;
import java.util.Scanner;
public class Main {
public static void main(String[] args) {
Scanner input = new Scanner(System.in);
LocalTime time = LocalTime.now();

String expected = "I am so tired!";
String[] expectedWords = expected.split(" ");

System.out.println(expected);
int start = time.toSecondOfDay();
System.out.print("Enter the sentence above: ");
String sentence = input.nextLine();
LocalTime time1 = LocalTime.now();
int end = time1.toSecondOfDay();
String[] userInput = sentence.split(" ");

double scorePerWord = Functions.getScorePerWord(expectedWords);
int totalTime = Functions.calculateTimeSpent(start,end);


int numberOfWords = userInput.length;

System.out.println("You spent " + totalTime + " seconds!");

System.out.println("Your typing speed is "+ Functions.calculateWordsPerMinute(totalTime,numberOfWords) + "wpm");

System.out.println("Your typing accuracy is " + Functions.calculateAccuracy(scorePerWord,userInput,expectedWords) + "%");

}
}