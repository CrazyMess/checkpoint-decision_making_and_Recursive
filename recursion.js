
//task 1: Fibonacci Sequence
function Fibonacci (n){
    if(n=0){
        return 0;
    }else if(n=1){
        return 1;
    } else {
        return (Fibonacci(n-1)+Fibonacci(n-2));
    }
}

//task 2: palindrome checker
function isPalindrome(str){
  function cleanString(s) {
    return s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  }

  // Main recursive function
  function checkPalindrome(s, left, right) {
    if (left >= right) return true; 
    if (s[left] != s[right]) return false; 
    return checkPalindrome(s, left + 1, right - 1); 
  }

  const cleanedStr = cleanString(str);
  return checkPalindrome(cleanedStr, 0, cleanedStr.length - 1);
}

//task 3: Power Function
function Power(n,p){
    if(p===0) { return 1; }
    else { 
        return n*Power(n,p-1); 
    }
}