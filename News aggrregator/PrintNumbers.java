public class PrintNumbers {
    public static void main(String[] args) {
        printNumbers(1);  // Start from 1
    }

    static void printNumbers(int n) {
        if (n > 10) {
            return;  // Base case: stop when n > 10
        }
        System.out.println(n);
        printNumbers(n + 1);  // Recursive call
    }
}
