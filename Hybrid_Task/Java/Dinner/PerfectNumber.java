import java.util.Scanner;

public class PerfectNumber {
public static void main(String[] args) {
Scanner input = new Scanner(System.in);

System.out.print("Enter a number: ");
int number = input.nextInt();

int sum = 0;
for(int divisor = 1; divisor < number; divisor++) {
	if(number % divisor == 0) sum += divisor;
}
if(sum == number) System.out.print(number + " is a perfect number!");
else System.out.print(number + " is not a perfect number!");

}
}