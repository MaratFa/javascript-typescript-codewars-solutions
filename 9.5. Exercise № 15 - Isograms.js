/*
 
  -- Description --   
  
  An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
  Example: (Input --> Output)
  "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

  isIsogram "Dermatoglyphics" = true
  isIsogram "moose" = false
  isIsogram "aba" = false
    
*/



/*  -- Solution № 1 --  */

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}



/*  -- Solution № 2 --  */

function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}



/*  -- Solution № 3 --  */

function isIsogram(str){
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      if (str.charAt(i).toUpperCase() === str.charAt(j + 1).toUpperCase()) {
        return false;
      }     
    }
  }  
  return true;    
}
