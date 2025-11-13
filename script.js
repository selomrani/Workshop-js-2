let data = []
async function fetchjson() {
  try {
    const response = await fetch('data.json');
    data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error 404 :(', error);
  }
}
fetchjson()

localStorage.setItem("students",JSON.stringify(data))
// let arrsize = students.length ;
const confirmButton = document.getElementById("confirmstudent");
    confirmButton.addEventListener("click", () => {
        Swal.fire({
            title: "Student added",
            text: "New student successfully to GenV class",
            icon: "success"
        });
    });
confirmButton.addEventListener("click",() =>{
    let obggg =  {
        fname : document.getElementById("fname").value,
        lname : document.getElementById("lname").value,
        age : document.getElementById("age").value,
        email : document.getElementById("email").value,
        pfpurl  : document.getElementById("pfpurl").value
    }
    data.push(obggg)
    console.log(data)
})

