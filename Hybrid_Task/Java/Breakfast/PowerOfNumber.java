public class PowerOfNumber {
public static void main(String[] args) {

int number = 4;
int exponent = 3;
int answer = 1;

for(int count = 0; count < exponent; count++) {
	answer *= number;
}

System.out.print(answer);
}
}
			