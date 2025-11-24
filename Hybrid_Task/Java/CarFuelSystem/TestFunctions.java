import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestFunctions {

	@Test
	public void testThatStartCarWorks(){
		Car car = new Car(20.2);
		car.startCar();
		assertEquals(car.getStartCar(),true);

}

}

