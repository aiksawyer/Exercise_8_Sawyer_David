
var rawText;
var joined;
var story;


var beginNum, endNum;

function preload() {
  rawText = loadStrings("data/frankenstein_ch4.rtf");

}

function setup() {
  console.log("got here");
  joined = join(rawText, " "); // join all of the txt into one String, 
  // leave " " between
  beginNum = joined.indexOf("It");
  console.log(beginNum);
  var end = "believe";
  endNum = joined.indexOf(end);
  // console.log(endNum);

  story = joined.substring(beginNum, endNum + end.length);
  //console.log(story);
  
  
  var doctor = story.replace("I", "Frankenstein");
  
  
  var cleaner = doctor.replace("Frankensteint", "Frankenstein"); // take the string and take out this work
  console.log(doctor);
  console.log(cleaner);

  
  
  var cleaner2 = cleaner.replace("very", "");
  console.log(cleaner2);
  
  
}





function draw() {

}