import java.util.Scanner;
public class Main {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        Bike motorBike = new Bike();

        String menu = """
            1. Start Car
            2. Stop Car
            3. Accelerate
            4. Decelerate  
            5. leave bike    
        """;
        String choice = "";
        while(!choice.equals("5")){
            System.out.print(menu);
            System.out.print("Enter a number from above: ");
            choice = input.next();
            switch(choice){
                case "1" -> motorBike.turnOn();
                case "2" -> motorBike.turnOff();
                case "3" -> {
                    motorBike.accelerate();
                    System.out.println(motorBike.getGear());
                }
                case "4" -> {
                    motorBike.decelerate();
                    System.out.println(motorBike.getGear());
                }
                case "5" -> {
                    if(motorBike.getIsOn() == false){
                        System.out.print("Parked");
                    }
                    else System.out.print("Turn off the bike!");
                }
            }
    
        }
    }
}
