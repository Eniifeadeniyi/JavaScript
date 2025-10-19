import java.util.Scanner;

public class LCM {
public static void main(String[] args) {
Scanner input = new Scanner(System.in);

System.out.print("Enter a number: ");
int numberOne = input.nextInt();

System.out.print("Enter another number: ");
int numberTwo = input.nextInt();

int multiple = 1;
while(multiple != 0) {
	if(multiple % numberOne != 0 | multiple % numberTwo != 0) multiple++;
	if(multiple % numberOne == 0 & multiple % numberTwo == 0) break; 
}
System.out.print(multiple);
}
}