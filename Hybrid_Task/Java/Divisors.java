public class Divisors {
public static void main(String[] args) {

int number = 32;
for(int divisor = 1; divisor <= number; divisor ++) {
	int divide = number % divisor;
	if(divide == 0) System.out.println(divisor);

}
}
}

