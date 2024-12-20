// write a code for userLoggedin checking in array of objects 
let data = [
    {
        email: "mounika@gmail.com",
        password: "mounika1234"
    },
    {
        email: "gayathri@gmail.com",
        password: "gaya"
    }
]
let userEmail = prompt("enter email here")
let userPassword = prompt("enter pswd here")
let user = data.find(user => user.email === userEmail && user.password === userPassword)
if (user) {

    alert("loggedin successfully!!!")
}
else {
    alert("no user found");
}

//2. allow pdf and docx files as resumes to be uploaded

let resumeType=".pdf";
let resumeType2=".docx";
let uploadResume=prompt("enter resumeName along with extension name.....")

if(uploadResume.endsWith(resumeType) || uploadResume.endsWith(resumeType2)){
    alert("resume uploaded succssfully!!!!!!!!")
}else{
    alert("pls choose only .pdf resumes")
}
