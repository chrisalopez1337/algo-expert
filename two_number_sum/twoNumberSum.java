import java.util.*;

class Program {
  public static int[] twoNumberSum(int[] array, int targetSum) {
		Set<Integer> nums = new HashSet<>();
		for (int num : array) {
			int target = targetSum - num;
			if (nums.contains(target)) {
				return new int[] {target, num};
			} else {
				nums.add(num);
			}
		}
    return new int[0];
  }
}
