import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import static org.junit.jupiter.api.Assertions.*;

public class TestBike {
    
    Bike okada;
    @BeforeEach
    void setUp(){
        okada = new Bike();
    }

    @Test
    public void testThatBikeCanTurnOn(){
        okada.turnOn();
        assertEquals(okada.getIsOn(),true);
    }

    @Test
    public void testThatBikeCanTurnOff(){
        okada.turnOn();
        okada.turnOff();
        assertEquals(okada.getIsOn(),false);
    }

    @Test
    public void testThatAccelerateWorks(){
        okada.turnOn();
        okada.accelerate();
        assertEquals(okada.getSpeed(),1);
    }

    @Test
    public void testThatAccelerateDoesNotWorkIfBikeIsOff(){
        okada.accelerate();
        assertEquals(okada.getSpeed(),0);
    }

    @Test
    public void testThatDecelerateWorks(){
        okada.turnOn();
        okada.decelerate();
        assertEquals(okada.getSpeed(),0);
    }

    @Test
    public void testThatDecelerateDoesNotWorkIfBikeIsOff(){
        okada.decelerate();
        assertEquals(okada.getSpeed(),0);
    }

    @Test 
    public void testThatGearAutomaticallyChangesAsSpeedChangesRange(){
        okada.turnOn();
        for(int count = 0; count < 25; count++) { 
            okada.accelerate(); 
        }
        assertEquals(okada.getGear(),2);
    }

    @Test 
    public void testThatGearAutomaticallyChangesAsSpeedReducesInRange(){
        okada.turnOn();
        for(int count = 0; count < 21; count++) { 
            okada.accelerate(); 
        }
        int firstGear = okada.getGear();
        okada.decelerate();
        int secondGear = okada.getGear();
        assertNotEquals(firstGear,secondGear);
    }


}
