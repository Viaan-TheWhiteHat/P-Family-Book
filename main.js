var images = [
    "Family book.jpg",
    "Dada.jpg",
    "Mom.jpg",
    "sister.png",
];
var names = ["family book", "Samrat Dev", "Binipani", "Bhibhavasu and LopaMudra"];
var i = 0;


function nextslide(){
  i++;
  var number = 3;
  if (i>number){
 i = 0;

  }
  var updated_image = images[i];
  var updated_name = names[i];
    document.getElementById("family_member_image").src = updated_image;
    document.getElementById("family_member_name").innerHTML = updated_name;
    
}