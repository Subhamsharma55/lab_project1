public class HelloWorldRecursive {
    public static void main(String[] args) {
        printHello(1); // Start from 1
    }

    static void printHello(int count) {
        if (count > 6) {
            return; // Base case: stop recursion
        }

        System.out.println("Hello World"); // Print the message
        printHello(count + 1); // Recursive call
    }
}
