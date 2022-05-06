const studentForm = document.getElementById("studentForm")
	const studentsContainer = document.querySelector(".students");
	const nameInput = studentForm["name"];
	const ageInput = studentForm["age"];
	const phnInput = studentForm["phn"];
	const emailInput = studentForm["email"];
	

	const students = JSON.parse(localStorage.getItem("students")) || [];
	

	const addStudent = (name, age, phn, email) => {
	  students.push({
	    name,
	    age,
	    phn,
	    email,
	  });
	

	  localStorage.setItem("students", JSON.stringify(students));
	

	  return { name, age, phn, email };
	};
	

	const createStudentElement = ({ name, age, phn, email }) => {
	  // Create elements
	  const studentDiv = document.createElement("div");
	  const studentName = document.createElement("h2");
	  const studentAge = document.createElement("p");
	  const studentPhn = document.createElement("p");
	  const studentEmail = document.createElement("p");
	

	  // Fill the content
	  studentName.innerText = "Student name: " + name;
	  studentAge.innerText = "Student age: " + age;
	  studentPhn.innerText = "Student phn: " + phn;
	  studentEmail.innerText = "Student email: " + email;
	

	  // Add to the DOM
	  studentDiv.append(studentName, studentAge, studentPhn, studentEmail);
	  studentsContainer.appendChild(studentDiv);
	

	  studentsContainer.style.display = students.length === 0 ? "none" : "flex";
	};
	

	studentsContainer.style.display = students.length === 0 ? "none" : "flex";
	

	students.forEach(createStudentElement);
	

	studentForm.onsubmit = e => {
	  e.preventDefault();
	

	  const newStudent = addStudent(
	    nameInput.value,
	    ageInput.value,
	    phnInput.value,
	    emailInput.value
	  );
	

	  createStudentElement(newStudent);
	

	  nameInput.value = "";
	  ageInput.value = "";
	  phnInput.value = "";
	  emailInput.value="";
	};
