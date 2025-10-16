public class SumEvenDigits {
public static void main(String[] args) {

String number = "12345";

int sum = 0;
for(int count = 0; count < number.length(); count++) {
System.out.print(sum);
if(number.charAt(count) % 2 == 0) sum += number.charAt(count);

}
System.out.print(sum);
}
}