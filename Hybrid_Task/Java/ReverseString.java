public class ReverseString {
public static void main(String[] args) {

String word = "eniife";

String[] words = word.split(" ");

String reverse = " ";
System.out.print(word.length());
for(int index = 0; index < word.length(); index++) {
reverse += words[index];	
}

System.out.print(reverse);

}
}