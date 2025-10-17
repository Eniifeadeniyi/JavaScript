public class BinaryToDecimal {
public static void main(String[] args) {

String input = "1011";
int answer = 0;

int power = (input.length()) - 1;

for(int count = 0; count < input.length(); count +=1) {
	Double number = input.charAt(count) * Math.floor((Math.pow(2, power)));
	int numberInt = (int) number;
	power -= 1;
	answer += number;
}	
System.out.print(answer);

}
}