public class StringPalindrome {
public static void main(String[] args) {

String word = "madaM".toLowerCase();


String reverse = " ";

for(int index = 0; index < word.length(); index++) {
reverse = word.charAt(index) + reverse;	
}
System.out.println(reverse);
System.out.println(word);

if(reverse == word) {
System.out.print(word + " is a palindrome!");
}
if(reverse != word) {
System.out.print(word + " is not a palindrome!");
}

}
}