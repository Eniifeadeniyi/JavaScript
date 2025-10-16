public class CountPrimeNumbers {
public static void main(String[] args) {


int counter = 0;
for(int number = 1; number <= 100; number += 1) {
	int count = 0;
	for(int divisor = 1; divisor <= number; divisor += 1) {
		if(number % divisor == 0) count += 1;
}
if(count == 2) counter += 1;
}	
		
System.out.print(counter);

}
}