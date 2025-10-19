public class CountLeapYear {
public static void main(String[] args) {

int count = 0;
for(int year = 1900; year <= 2025; year++) {
	if(year % 4 == 0 & year % 100 != 0) count += 1;
	if(year % 4 == 0 & year % 100 == 0 & year % 400 == 0) count += 1;
}
System.out.print(count);
}
}