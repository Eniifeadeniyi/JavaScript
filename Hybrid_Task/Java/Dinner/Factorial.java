import java.util.Scanner;

public class Factorial {
public static void main(String[] args) {
Scanner input = new Scanner(System.in);

System.out.print("Enter a number: ");
int number = input.nextInt();

int answer = 1;

for(int count = 1; count <= number; count++) {
	answer *= count;
}
System.out.print(answer);
}
}