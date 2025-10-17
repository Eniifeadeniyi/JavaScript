public class SumEvenDigits {
public static void main(String[] args) {

int input = 12345;
String number = String.valueOf(input);

int sum = 0;
for(int count = 0; count < number.length(); count++) {
if(number.charAt(count) % 2 == 0) {
System.out.println(number.charAt(count));
sum = sum + (int) number.charAt(count);
System.out.println(sum);
}
}

}
}