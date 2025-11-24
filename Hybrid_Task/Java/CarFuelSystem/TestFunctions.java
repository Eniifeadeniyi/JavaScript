import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestFunctions {

	@Test
	public void testThatCarCanStart(){
		Car car = new Car(20.2);
		car.startCar();
		assertEquals(car.getStartCar(),true);

}

	@Test
	public void testThatCarCanStop(){
		Car car = new Car(20.2);
		car.stopCar();
		assertEquals(car.getStartCar(),false);

}

	@Test
	public void testThatCarCanMove(){
		Car car = new Car(20.2);
		car.moveCar(50);
		assertEquals(car.getDistance(),50.0);
}

	@Test
	public void testThatCarFuelReducesWhenCarMoves(){
		Car car = new Car(20);
		car.addToFuel(50);
		car.moveCar(50);
		assertEquals(car.getCurrentFuelLevel(),47.5);
}

	@Test
	public void testThatYouCanAddToFuel(){
		Car car = new Car(20.2);
		car.addToFuel(45);
		assertEquals(car.getCurrentFuelLevel(),45.0);

}

	@Test
	public void testThatAddToFuelDoesNotTakeInvalidInput(){
		Car car = new Car(20.2);
		car.addToFuel(-20);
		assertEquals(car.getCurrentFuelLevel(),0.0);

}

	@Test
	public void testThatFuelCantPassFifty(){
		Car car = new Car(20);
		car.addToFuel(47.5);
		car.addToFuel(4);
		assertEquals(car.getCurrentFuelLevel(), 47.5);
}

}

