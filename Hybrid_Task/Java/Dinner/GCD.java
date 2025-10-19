import java.util.Scanner;

public class GCD {
public static void main(String[] args) {
Scanner input = new Scanner(System.in);

System.out.print("Enter a number: ");
int numberOne = input.nextInt();

System.out.print("Enter another number: ");
int numberTwo = input.nextInt();

int max = Math.max(numberOne, numberTwo);
int min = Math.min(numberOne, numberTwo);

int divisor = 2;
int greatest = 1;
while(divisor <= max) {
	if(max % divisor == 0 & min % divisor == 0) {
		if(divisor > greatest) greatest = divisor; }
divisor++;
}
System.out.print(greatest);
}
}


