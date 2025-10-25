public class DecimalToBinary {
public static void main(String[] args) {

int input = 11;

String answer = "";

int count = 0;
while(input != 0) {
	int remainder = input % 2;
	input = input / 2;	
	answer = Integer.toString(remainder) + answer;
	count += 1;
}
System.out.print(answer);

}
}