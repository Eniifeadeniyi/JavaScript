import java.util.Scanner;

public class StrongNumber {
public static void main(String[] args) {
Scanner input = new Scanner(System.in);

System.out.print("Enter a number: ");
int number = input.nextInt();

String num = Integer.toString(number);
	int sum = 0;
for(int count = 0; count < num.length(); count++) {
	int answer = 1;
	int digits = num.charAt(count);
	int digit = Character.getNumericValue(digits);
	for(int counter = 1; counter <= digit; counter++) {
		answer *= counter;
		
}
sum += answer;
}
if(sum == number) System.out.print(number + " is a strong number!");
else System.out.print(number + " is not a strong number!");

}
}