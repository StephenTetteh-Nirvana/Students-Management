const form = document.querySelector(".form")
const studentInfo = document.querySelector(".student-info")
const displayStudent = document.querySelector(".students-display")

let students = localStorage.getItem("students") !== null ? JSON.parse(localStorage.getItem("students")) : [] ;

form.addEventListener("submit",event=>{
    event.preventDefault();
    const student = {
         studentId:Math.floor(Math.random()*200),
         studentName:form.studentName.value,
         studentLevel:form.level.value,
         studentContact:form.contact.value,
         studentDate:form.date.value
    }
    students.push(student)
    form.reset()
    localStorage.setItem("students",JSON.stringify(students))
    addStudentDom(student.studentId,student.studentName,student.studentLevel,student.studentDate,student.studentContact)
})

function addStudentDom(id,name,level,date,contact){
    studentInfo.innerHTML += `<li data-id="${id}" class="student">
                                <p>${id}</p>
                                <p>${name}</p>
                                <p>${level}</p>
                                <p>${date}</p>
                                <p>${contact}</p>
                            </li>`
}

function loadStudents(){
    const allStudents = (JSON.parse(localStorage.getItem("students")))
    if(allStudents === null){
       console.log("No students to show")
    }else{
        allStudents.forEach((student)=>{
            console.log(student)
            studentInfo.innerHTML += `<li data-id=${student.studentId} class="student">
                                       <p>${student.studentId}</p>
                                       <p>${student.studentName}</p>
                                       <p>${student.studentLevel}</p>
                                       <p>${student.studentDate}</p>
                                       <p>${student.studentContact}</p>
                                     </li>`
        })
    }
   
}
loadStudents()