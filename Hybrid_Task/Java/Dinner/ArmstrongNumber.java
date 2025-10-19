import java.util.Scanner;

public class ArmstrongNumber {
public static void main(String[] args) {
Scanner input = new Scanner(System.in);

System.out.print("Enter a number: ");
int number = input.nextInt();

String num = Integer.toString(number);
Double sum = 0.00;
for(int count = 0; count < num.length(); count++) {
	Double power = Math.pow(num.charAt(count), num.length());
	sum += power;
}

if(sum == number) System.out.print(number + " is an Armstrong number!");
if(sum != number) System.out.print(number + " is not an Armstrong number!");

}
}