public class SumOddDigits {
public static void main(String[] args) {

int[] input = {1,2,3,4,5};
int sum = 0;
for(int count = 0; count < 5; count++) {
	if(input[count] % 2 != 0) sum += input[count];
}
System.out.print(sum);
}
}