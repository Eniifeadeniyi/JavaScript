public class CountWords {
public static void main(String[] args) {


String sentence = "Eniife is a cool girl.";

int counter = 1;

for(int count = 0; count < sentence.length(); count += 1) {
	if(sentence.charAt(count) === " ") counter += 1;
}

System.out.print(counter);

}
}