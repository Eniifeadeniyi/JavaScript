import java.util.Scanner;

public class EncryptData {
public static void main(String[] args) {
Scanner scanner = new Scanner(System.in);


System.out.print("Enter a four-digit number: ");
int number = scanner.nextInt();

int[] digits = new int[4];
int power = 1000;

for(int count = 0; count < 4; count++) {
	int digit = number / power;
	digits[count] = (digit + 7) % 10;
	number %= power;
	power /= 10;	
}


int[] rearrange = new int[4];
rearrange[0] = digits[2];
rearrange[1] = digits[3];
rearrange[2] = digits[0];
rearrange[3] = digits[1];

System.out.print(rearrange[0]);
System.out.print(rearrange[1]);
System.out.print(rearrange[2]);
System.out.print(rearrange[3]);
}
}