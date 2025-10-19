public class ArmstrongNumbers {
public static void main(String[] args) {

for(int number = 1; number < 1001; number++) {
	String num = Integer.toString(number);
	Double sum = 0.00;

	for(int count = 0; count < num.length(); count++) {
		char digits = num.charAt(count);
		int digit = Character.getNumericValue(digits);
		Double power = Math.pow(digit, 3);
		sum += power;
}
if(sum == number) System.out.println(number);
}

}
}