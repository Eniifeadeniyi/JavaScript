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
                case "1" -> {
                    if(motorBike.getIsOn() == false) motorBike.turnOn();
                    else System.out.println("Bike already on!");
                }
                case "2" ->{
                    if(motorBike.getIsOn() == false) System.out.println("Bike already off!");
                    else motorBike.turnOff();
                } 
                case "3" -> {
                    if(motorBike.getIsOn() == false) System.out.println("Bike is off!");
                    else {
                        motorBike.accelerate();
                        System.out.println("Gear : " + motorBike.getGear());
                        System.out.println("Speed : " + motorBike.getSpeed());
                    }
                }
                case "4" -> {
                    if(motorBike.getIsOn() == false) System.out.println("Bike is off!");
                    else {
                        motorBike.decelerate();
                        System.out.println("Gear : " + motorBike.getGear());
                        System.out.println("Speed : " + motorBike.getSpeed());
                    }
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
