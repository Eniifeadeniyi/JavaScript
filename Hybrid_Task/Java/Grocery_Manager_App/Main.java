import java.util.ArrayList;
import java.util.Scanner;
public class Main {
public static void main(String[] args) {
Scanner input = new Scanner(System.in);
Functions function = new Functions();

System.out.println("Welcome to Eniife's Supermart!");
String menu = """
	1. Add item.
	2. Remove Item.
	3. Show all available items.
	4. Exit
""";

ArrayList<ArrayList> cart = new ArrayList<>();



String operation = "";
while(!operation.equals("4")) {
	System.out.println(menu);
	System.out.print("Enter an operation: ");
	operation = input.next();
	input.nextLine();
	switch(operation) {
		case "1" -> {
			System.out.print("Enter item: ");
			String item = input.nextLine();
			System.out.print("Enter amount: ");
			int amount = input.nextInt();
			System.out.print(function.addItem(item,amount,cart));}

		default -> {
			System.out.print("Please enter a number from below: ");}

		case "4" -> {
			System.out.println("Thanks for shopping with us");
			System.out.print("See you later,bye!!!");}
			}
	}


}


}
