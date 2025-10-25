public class CountUpper {
public static void main(String [] args){

String word = "EniifE";
String compare = word.toUpperCase();
int counter = 0;
		
for(int count = 0; count < word.length(); count++){
if( word.charAt(count) == compare.charAt(count) ) counter += 1;
}

System.out.print(counter);
}
}