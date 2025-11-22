import java.util.Arrays;
public class FunctionTask {
public static void main(String[] args) {

System.out.print(Arrays.toString(Task(new int[] {7,5,2,-4,10}, 1)));

}
public static int[] Task(int[] numbers, int number){
	int[] nums = new int[2];
	for(int count = 0; count < numbers.length; count++) {
		for(int counter = count + 1; counter < numbers.length; counter++) {
		if(numbers[count] + numbers[counter] == number) {
			nums[0] = numbers[count];
			nums[1] = numbers[counter];
			return nums;
			}
		}
	}
	return nums;
}

}