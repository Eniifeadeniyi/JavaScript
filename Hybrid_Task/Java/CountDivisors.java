public class CountDivisors {
public static void main(String[] args) {

int number = 100;
int count = 0;
for(int divisor = 1; divisor <= number; divisor ++) {
	int divide = number % divisor;
	if(divide == 0) {
		count += 1;
		
	}

}
System.out.println(count);
}
}

