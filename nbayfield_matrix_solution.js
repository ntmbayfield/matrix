//Input:  String of Numbers with embedded line breaks


//use Split method to turn string into an array using a reg expression that will use new line breaks as the separator and ignore white spaces

//For row output:
//need to be able to specify which row you want it to display or which column
var string;
var stringTrimmed;
var stringNoWhiteSpaces;
var str2Array = [];
var rowArray = [];
var rowSelection = [];
var sampleString = "9 8 7\n6 5 4\n3 2 1\n0 1 2";


function createRowMatrix(string, rowIndex) {
  //convert string into an array using new line breaks as the separator
  //stringTrimmed = string.trim();
  //str2Array = string.split('\n');
  //stringTrimmed = string.replace(/\s+/g, '');
 str2Array = string.split('\n');
 stringTrimmed = str2Array.join();
 stringNoWhiteSpaces = stringTrimmed.replace(/\s+/g, '');
 rowArray = stringNoWhiteSpaces.split(',');


return rowArray;

//use split method on stringNoWhiteSpaces with ',' as the separator



}
