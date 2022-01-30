nameofstudentarray = [];
function submit(){
displaythenamearray = [];
for(i=1;i<=4;i++){
var name1=document.getElementById("name_of_the_student"+i).value;
console.log(name1);
nameofstudentarray.push(name1);
}
console.log(nameofstudentarray);

var length1=nameofstudentarray.length;
for (var k = 0; k < lenght_of_name_of_students_array; k++) { displaythenamearray.push("NAME - "+ nameofstudentarray[k] + "</h1>"); 
console.log(displaythenamearray);}
document.getElementById("display_name_with_commas").innerHTML=displaythenamearray;
var remove_commas=displaythenamearray.join("");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display = "none"; document.getElementById("sort_button").style.display = "inline-block";

}
function sorting(){
    nameofstudentarray.sort;
    var displaysortedarray=[];
    for (var k = 0; k < 4; k++) { displaysortedarray.push("NAME - "+ name_of_the_student_array[k] + "</h1>");}
    var remove_commas=displaysortedarray.join("");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
 }