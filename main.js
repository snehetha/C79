var names_array=[];
function Submit(){
    var name1=document.getElementById("Student_1").value;
    var name2=document.getElementById("Student_2").value;
    var name3=document.getElementById("Student_3").value;
    var name4=document.getElementById("Student_4").value;
    names_array.push(name1);
    names_array.push(name2);
    names_array.push(name3);
    names_array.push(name4);
    document.getElementById("names").innerHTML=names_array;
    document.getElementById("sub").style.display="none";
    document.getElementById("sor").style.display="inline-block";

}
function sorting(){
    names_array.sort();
    console.log(names_array);
    document.getElementById("names").innerHTML=names_array;
}