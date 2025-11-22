import java.util.Scanner;
public class Main {
public static void main(String[] args) {
Scanner input = new Scanner(System.in);


System.out.print("Enter your car's fuel efficiency: ");
while(!input.hasNextDouble()) {
	System.out.println("Invalid input!");
	System.out.print("Enter your car's fuel efficiency: ");
	input.nextLine();
}
Double fuelEfficiency = input.nextDouble();
if(fuelEfficiency > 0) {
Car car = new Car(fuelEfficiency);

String menu = """
	1. Start Car
	2. Move Car
	3. Check Fuel
	4. Increase Fuel
	5. Stop Car
""";

String operation = "";
while(!operation.equals("5")) {
	System.out.println(menu);
	System.out.print("Enter a number from above: ");
	operation = input.next();
	switch(operation) {
		case "1" -> {
			car.startCar();
			if(car.getStartCar() == true) System.out.print("On");}

		case "2" -> {
			if(car.getStartCar() == true && car.getCurrentFuelLevel() != 0) {
				System.out.print("How far are you going?: ");
				while(!input.hasNextDouble()) {
					System.out.println("Invalid input!");
					System.out.print("How far are you going?: ");}
				double distance = input.nextDouble();
				car.moveCar(distance);
				System.out.print("Distance moved: " + car.getDistance());}
			else System.out.println("Switch on the car first and add fuel!");
			}

		case "3" -> System.out.print(car.getCurrentFuelLevel());

		case "4" -> {
			System.out.print("Enter fuel amount: ");
			while(!input.hasNextDouble()) {
					System.out.println("Invalid input!");
					System.out.print("Enter fuel amount: ");}
			double fuelAmount = input.nextDouble();
			car.addToFuel(fuelAmount);	
			}

		case "5" -> car.stopCar();

		default -> System.out.println("Invalid input!");	
			
		
		}
}
}

}
}