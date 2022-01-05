




















// Javascript implementation to find the
// longest subarray consisting of
// only two values with difference K

// Function to return the length
// of the longest sub-array
function longestSubarray(arr, n, k) {
    let i,
      j,
      Max = 1;
  
    // Initialize set
    let s = new Set();
  
    for (i = 0; i < n - 1; i++) {
      // Store 1st element of
      // sub-array into set
      s.add(arr[i]);
  
      for (j = i + 1; j < n; j++) {
        // Check absolute difference
        // between two elements
  
        if (Math.abs(arr[i] - arr[j]) == 0 || Math.abs(arr[i] - arr[j]) == k) {
          // If the new element is not
          // present in the set
          if (!s.has(arr[j])) {
            // If the set contains
            // two elements
            if (s.size == 2) break;
            // Otherwise
            else s.add(arr[j]);
          }
        } else break;
      }
  
      if (s.size == 2) {
        // Update the maximum
        // length
        Max = Math.max(Max, j - i);
  
        // Remove the set
        // elements
        s.clear;
      } else s.clear;
    }
    return Max;
  }
  // let arr = [1, 0, 2, 2, 5, 5, 5];
  let arr = [5, 7, 1, 1, 2, 4, 4, 4, 5, 5, 4, 5, 8, 9];
  let N = arr.length;
  let K = 1;
  let length = longestSubarray(arr, N, K);
  if (length == 1) document.write(-1);
  else document.write(length);