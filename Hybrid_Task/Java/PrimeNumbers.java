public class PrimeNumbers {
public static void main(String[] args) {

String numbers = " ";
String separate = ",";
for(int number = 1; number <= 100; number += 1) {
	int count = 0;
	for(int divisor = 1; divisor <= number; divisor += 1) {
		if(number % divisor == 0) count += 1;
}
if(count == 2) numbers += number + separate;
}	
		
System.out.print(numbers);

}
}