import java.util.ArrayList;
public class Functions {
	
	ArrayList<ArrayList> cart = new ArrayList<ArrayList>();
	public String addItem(String good,int count,ArrayList cart) { 
		ArrayList<Integer> amount = new ArrayList<Integer>();
		ArrayList<String> items = new ArrayList<String>();
			cart.add(items);
			cart.add(amount);
			items.add(good);
			amount.add(count);

			
		return("Item added successfully!");
	}

}