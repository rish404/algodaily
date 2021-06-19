function isPalindrome(str){
    str = str.toLowerCase();
    str = str.split(' ').join('');
    console.log(str)
    let left = 0;
	let right = str.length - 1;
	let leftChar;
	let rightChar;

    while (left <= right){
        leftChar = str.charAt(left);
		rightChar = str.charAt(right);

		if (leftChar == rightChar) {
			left++;
			right--;
		} else {
			return false;
		}
	}

	return true;
    }
console.log(isPalindrome('A Santa Lived As a Devil At NASA'))
