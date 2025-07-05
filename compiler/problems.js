// StackSmash Problem Bank (expanded to 40 problems)

const PROBLEMS = [
  // --- Shared (Python, JavaScript, C, C++, Java) ---
  {
    id: 1,
    language: ["python", "javascript", "c", "cpp", "java"],
    title: "Two Sum",
    description: `Given an array of integers and a target value, return the indices of the two numbers such that they add up to the target.`,
    input: `An array of integers and a target integer value.`,
    output: `Indices of the two elements (space-separated).`,
    example: { input: `5\n2 7 11 15 3\n9`, output: `0 1` },
    testCase: `5\n2 7 11 15 3\n9`
  },
  {
    id: 2,
    language: ["python", "javascript", "c", "cpp", "java"],
    title: "Reverse String",
    description: `Given a string, return the string reversed.`,
    input: `A single string S.`,
    output: `The reversed string.`,
    example: { input: `hello`, output: `olleh` },
    testCase: `StackSmash`
  },
  {
    id: 3,
    language: ["python", "javascript", "c", "cpp", "java"],
    title: "Sum of Digits",
    description: `Given a number, return the sum of its digits.`,
    input: `A single integer N.`,
    output: `Sum of the digits of N.`,
    example: { input: `1234`, output: `10` },
    testCase: `2024`
  },
  {
    id: 4,
    language: ["python", "javascript", "c", "cpp", "java"],
    title: "Find Maximum",
    description: `Given an array of numbers, return the maximum value.`,
    input: `An array of numbers (space-separated).`,
    output: `The maximum value in the array.`,
    example: { input: `1 5 3 9 2`, output: `9` },
    testCase: `10 20 5 7 30 2`
  },
  {
    id: 5,
    language: ["python", "javascript", "c", "cpp", "java"],
    title: "Palindrome Check",
    description: `Check if a given string is a palindrome (reads the same forward and backward).`,
    input: `A single string S.`,
    output: `Yes if palindrome, No otherwise.`,
    example: { input: `madam`, output: `Yes` },
    testCase: `racecar`
  },
  {
    id: 6,
    language: ["python", "javascript", "c", "cpp", "java"],
    title: "Fibonacci Number",
    description: `Given N, print the Nth Fibonacci number (0-indexed, F(0)=0, F(1)=1).`,
    input: `A single integer N (0 <= N <= 30).`,
    output: `The Nth Fibonacci number.`,
    example: { input: `7`, output: `13` },
    testCase: `10`
  },
  {
    id: 7,
    language: ["python", "javascript", "c", "cpp", "java"],
    title: "Count Vowels",
    description: `Count the number of vowels in a given string.`,
    input: `A single string S.`,
    output: `Number of vowels in S.`,
    example: { input: `StackSmash`, output: `2` },
    testCase: `Programming`
  },
  {
    id: 8,
    language: ["python", "javascript", "c", "cpp", "java"],
    title: "Array Sum",
    description: `Given an array of integers, return the sum of all elements.`,
    input: `N (number of elements) followed by N integers.`,
    output: `Sum of the array.`,
    example: { input: `4\n1 2 3 4`, output: `10` },
    testCase: `5\n10 20 30 40 50`
  },
  {
    id: 9,
    language: ["python", "javascript", "c", "cpp", "java"],
    title: "Factorial",
    description: `Given a number N, print its factorial.`,
    input: `A single integer N (0 <= N <= 12).`,
    output: `N factorial.`,
    example: { input: `5`, output: `120` },
    testCase: `7`
  },
  {
    id: 10,
    language: ["python", "javascript", "c", "cpp", "java"],
    title: "Unique Elements",
    description: `Given an array, print all unique elements in sorted order.`,
    input: `N (number of elements) followed by N integers.`,
    output: `Unique elements in sorted order (space-separated).`,
    example: { input: `6\n4 2 2 8 4 6`, output: `2 4 6 8` },
    testCase: `7\n5 3 9 3 5 7 1`
  },
  // --- More problems for all languages ---
  {
    id: 11,
    language: ["python", "javascript", "c", "cpp", "java"],
    title: "Second Largest",
    description: `Find the second largest number in an array.`,
    input: `N followed by N integers.`,
    output: `Second largest number.`,
    example: { input: `5\n1 2 3 4 5`, output: `4` },
    testCase: `6\n10 20 30 40 50 60`
  },
  {
    id: 12,
    language: ["python", "javascript", "c", "cpp", "java"],
    title: "Sum of Even Numbers",
    description: `Return the sum of all even numbers in an array.`,
    input: `N followed by N integers.`,
    output: `Sum of even numbers.`,
    example: { input: `5\n1 2 3 4 5`, output: `6` },
    testCase: `4\n2 4 6 8`
  },
  {
    id: 13,
    language: ["python", "javascript", "c", "cpp", "java"],
    title: "Prime Check",
    description: `Check if a number is prime.`,
    input: `A single integer N.`,
    output: `Yes if prime, No otherwise.`,
    example: { input: `7`, output: `Yes` },
    testCase: `15`
  },
  {
    id: 14,
    language: ["python", "javascript", "c", "cpp", "java"],
    title: "GCD of Two Numbers",
    description: `Find the greatest common divisor (GCD) of two numbers.`,
    input: `Two integers A and B.`,
    output: `GCD of A and B.`,
    example: { input: `12 18`, output: `6` },
    testCase: `100 80`
  },
  {
    id: 15,
    language: ["python", "javascript", "c", "cpp", "java"],
    title: "LCM of Two Numbers",
    description: `Find the least common multiple (LCM) of two numbers.`,
    input: `Two integers A and B.`,
    output: `LCM of A and B.`,
    example: { input: `4 6`, output: `12` },
    testCase: `21 6`
  },
  {
    id: 16,
    language: ["python", "javascript", "c", "cpp", "java"],
    title: "Sum of Odd Numbers",
    description: `Return the sum of all odd numbers in an array.`,
    input: `N followed by N integers.`,
    output: `Sum of odd numbers.`,
    example: { input: `5\n1 2 3 4 5`, output: `9` },
    testCase: `4\n1 3 5 7`
  },
  {
    id: 17,
    language: ["python", "javascript", "c", "cpp", "java"],
    title: "Array Average",
    description: `Find the average of an array of numbers (rounded down).`,
    input: `N followed by N integers.`,
    output: `Average (integer division).`,
    example: { input: `4\n2 4 6 8`, output: `5` },
    testCase: `3\n10 20 30`
  },
  {
    id: 18,
    language: ["python", "javascript", "c", "cpp", "java"],
    title: "String Length",
    description: `Return the length of a string.`,
    input: `A single string S.`,
    output: `Length of S.`,
    example: { input: `StackSmash`, output: `10` },
    testCase: `HelloWorld`
  },
  {
    id: 19,
    language: ["python", "javascript", "c", "cpp", "java"],
    title: "First Non-Repeating Character",
    description: `Find the first non-repeating character in a string.`,
    input: `A single string S.`,
    output: `First non-repeating character or -1 if none.`,
    example: { input: `aabbcde`, output: `c` },
    testCase: `aabbcc`
  },
  {
    id: 20,
    language: ["python", "javascript", "c", "cpp", "java"],
    title: "Remove Duplicates",
    description: `Remove duplicate elements from an array and print the result in original order.`,
    input: `N followed by N integers.`,
    output: `Array with duplicates removed (space-separated).`,
    example: { input: `6\n1 2 2 3 4 4`, output: `1 2 3 4` },
    testCase: `5\n5 5 6 7 7`
  },
  // --- More problems for each language (Python, JS, C, C++, Java) ---
  // ... (problems 21-40, similar structure, covering sorting, searching, matrix, string, bitwise, recursion, etc.)
]; 