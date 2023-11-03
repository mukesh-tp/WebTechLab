function isPalindrome(){
    var str = document.getElementById("inputString").value;
    var len = str.length;
    var i = 0;
    var flag = 0;
    while(i<len){
        if(str[i] == str[len-i-1]){
            flag = 1;
        }
        else{
            flag = 0;
            break;
        }
        i++;
    }
    if(flag == 1){
        alert("Yes")
    }
    else{
        alert("No")
    }
}

document.getElementById("Fun").addEventListener("click", isPalindrome);