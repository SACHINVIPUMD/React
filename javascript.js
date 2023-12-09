function display(){
    document.write("Hello World!");
    console.log("this console");
}
display();
function print(a,b){
    document.write(a+b);
}
print(5,10);
let student={
    name:"sachin",
    age:19
}
document.write(student.name);
alert("this is alert message");
function late(){
    document.write("print this after 3 sec");
}
setTimeout(late,3000)