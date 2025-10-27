import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
public class FunctionsTest {
	
	Functions function;
	@BeforeEach
	void setup() {
		function = new Functions(); 
	}	

	@Test
	public void testThatYouCanAddAnItem() {
	ArrayList<ArrayList> cart = new ArrayList<>();
	ArrayList actual = function.addItem("Potato",10,cart);
	ArrayList expected = [[Potato], [10]];
	assertEquals(result, expected);
	
	}

}