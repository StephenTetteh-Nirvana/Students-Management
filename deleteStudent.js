const form = document.querySelector(".form")
const studentInfo = document.querySelector(".student-info")

let students = localStorage.getItem("students") !== null ? JSON.parse(localStorage.getItem("students")) : [] ;

form.addEventListener("keyup",event=>{
    event.preventDefault()
    const inputValue = form.inputInfo.value.trim();
    filterStudent(inputValue)

})

function filterStudent(inputValue){
    Array.from(studentInfo.children).filter((student)=>{
        return !student.textContent.includes(inputValue)
      }).forEach((student)=>{
          student.classList.add("hide")
          console.log(student)
      })
  
      Array.from(studentInfo.children).filter((student)=>{
          return student.textContent.includes(inputValue)
        }).forEach((student)=>{
            student.classList.remove("hide")
            console.log(student)
        })
}

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
                                       <button class="delete" onclick="deleteStudentDOM(event)">Delete</button>
                                     </li>`
        })
    }
   
}
loadStudents()

function deleteStudent(id){
    students = students.filter((student)=>{
        return student.studentId !== id;
    })

    localStorage.setItem("students",JSON.stringify(students))
   
}

function deleteStudentDOM(event){
    if(event.target.classList.contains("delete")){
       event.target.parentElement.remove()
       deleteStudent(Number(event.target.parentElement.dataset.id));
    }
}
