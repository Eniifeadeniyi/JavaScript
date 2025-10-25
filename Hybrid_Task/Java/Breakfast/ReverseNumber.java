public class ReverseNumber {
public static void main(String[] args) {

String word = "12345";


String reverse = " ";

for(int index = 0; index < word.length(); index++) {
reverse = word.charAt(index) + reverse;	
}

System.out.print(reverse);

}
}