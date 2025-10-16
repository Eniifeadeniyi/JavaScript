public class Average {
public static void main(String[] args) {

Double sum = 0.0;
int counter = 0;
for(int count = 1; count <= 100; count++) {
	counter += 1;
	sum += count;
	
}
Double average = sum / counter;
System.out.print(average);
}
}
