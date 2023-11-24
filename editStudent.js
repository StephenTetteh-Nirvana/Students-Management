const studentInfo = document.querySelector(".student-info")
let students = localStorage.getItem("students") !== null ? JSON.parse(localStorage.getItem("students")) : [] ;


function loadStudents(){
    const allStudents = (JSON.parse(localStorage.getItem("students")))
    if(allStudents === null){
       console.log("No students to show")
    }else{
        allStudents.forEach((student)=>{
            studentInfo.innerHTML += `<li data-id=${student.studentId} class="student">
                                       <p>${student.studentId}</p>
                                       <p>${student.studentName}</p>
                                       <p>${student.studentLevel}</p>
                                       <p>${student.studentDate}</p>
                                       <p>${student.studentContact}</p>
                                       <button class="edit">Edit</button>
                                     </li>`
        })
    }
   
}
loadStudents()