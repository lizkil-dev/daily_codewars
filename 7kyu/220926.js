/* Remove anchor from URL

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1" */

function removeUrlAnchor(url){
  let array = url.split('');
  
  let index = array.indexOf('#');
  
  if(index != -1){
    array.splice(index);
    return array.join(''); 
  }else{
    return url
  }
}

removeUrlAnchor('www.codewars.com/katas/')