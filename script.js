function showYear() {
  let year = document.getElementById("year");
  year.disabled = false;

  year.innerHTML = `
    <option value="">Select Year</option>
    <option value="1">1st Year</option>
    <option value="2">2nd Year</option>
    <option value="3">3rd Year</option>
    <option value="4">4th Year</option>
  `;
}

function showSemester() {
  let sem = document.getElementById("semester");
  sem.disabled = false;

  sem.innerHTML = `
    <option value="">Select Semester</option>
    <option value="1">Semester 1</option>
    <option value="2">Semester 2</option>
  `;
}

function showSubjects() {
  let branch = document.getElementById("branch").value;
  let year = document.getElementById("year").value;
  let sem = document.getElementById("semester").value;

  let subject = document.getElementById("subject");
  subject.disabled = false;

  subject.innerHTML = `<option value="">Select Subject</option>`;

  // ✅ CSE 2-2 Subjects
  if (branch === "cse" && year === "" && sem === "1") {
    subject.innerHTML += `
      <option value="c">C Programming</option>
      <option value="chemistry">Chemistry</option>
      <option value="lac">LAC</option>
      <option value="EG">Engineering Graphics</option>
      <option value="bcme">BCME</option>
      
    `;
  }

  // ✅ ECE 2-2 Subjects
  else if (branch === "it" && year === "1" && sem === "1") {
    subject.innerHTML += `
      <option value="c">C Programming</option>
      <option value="chemistry">Chemistry</option>
      <option value="lac">LAC</option>
      <option value="EG">Engineering Graphics</option>
      <option value="bcme">BCME</option>
      
    `;
  }


  else if (branch === "ece" && year === "1" && sem === "1") {
    subject.innerHTML += `
      <option value="c">C Programming</option>
      <option value="chemistry">Chemistry</option>
      <option value="lac">LAC</option>
      <option value="EG">Engineering Graphics</option>
      <option value="bcme">BCME</option>
    `;
  }  



  else if (branch === "civil" && year === "1" && sem === "1") {
    subject.innerHTML += `
      <option value="c">C Programming</option>
      <option value="chemistry">Chemistry</option>
      <option value="lac">LAC</option>
      <option value="EG">Engineering Graphics</option>
      <option value="bcme">BCME</option>
    `;
  }  



  else if (branch === "me" && year === "1" && sem === "1") {
    subject.innerHTML += `
      <option value="c">C Programming</option>
      <option value="chemistry">Chemistry</option>
      <option value="lac">LAC</option>
      <option value="EG">Engineering Graphics</option>
      <option value="bcme">BCME</option>

    `;
  }  


   else if (branch === "aids" && year === "1" && sem === "1") {
    subject.innerHTML += `
      <option value="c">C Programming</option>
      <option value="chemistry">Chemistry</option>
      <option value="lac">LAC</option>
      <option value="EG">Engineering Graphics</option>
      <option value="bcme">BCME</option>

    `;
  } 

   else if (branch === "csc" && year === "1" && sem === "1") {
    subject.innerHTML += `
      <option value="c">C Programming</option>
      <option value="chemistry">Chemistry</option>
      <option value="lac">LAC</option>
      <option value="EG">Engineering Graphics</option>
      <option value="bcme">BCME</option>

    `;
  }  



   else if (branch === "ds" && year === "1" && sem === "1") {
    subject.innerHTML += `
      <option value="c">C Programming</option>
      <option value="chemistry">Chemistry</option>
      <option value="lac">LAC</option>
      <option value="EG">Engineering Graphics</option>
      <option value="bcme">BCME</option>

    `;
  }  




    else if (branch === "eee" && year === "1" && sem === "1") {
    subject.innerHTML += `
      <option value="c">C Programming</option>
      <option value="chemistry">Chemistry</option>
      <option value="lac">LAC</option>
      <option value="EG">Engineering Graphics</option>
      <option value="bcme">BCME</option>

    `;
  }   


   else if (branch === "ai" && year === "1" && sem === "1") {
    subject.innerHTML += `
      <option value="c">C Programming</option>
      <option value="chemistry">Chemistry</option>
      <option value="lac">LAC</option>
      <option value="EG">Engineering Graphics</option>
      <option value="bcme">BCME</option>

    `;
  }    


  else if (branch === "it" && year === "1" && sem === "2") {
    subject.innerHTML += `
      <option value="devc">DEVC</option>
      <option value="physics">ENGINEERING PHYSICS</option>
      <option value="english">COMMUNICATIVE ENGLISH</option>
      <option value="beee">BEEE</option>
      <option value="DS">DATA STRUCTURE</option>
      

    `;
  }


    else if (branch === "ece" && year === "1" && sem === "2") {
    subject.innerHTML += `
      <option value="devc">DEVC</option>
      <option value="physics">ENGINEERING PHYSICS</option>
      <option value="english">COMMUNICATIVE ENGLISH</option>
      <option value="beee">BEEE</option>
      <option value="DS">DATA STRUCTURE</option>
      

    `;
  } 


    else if (branch === "civil" && year === "1" && sem === "2") {
    subject.innerHTML += `
      <option value="devc">DEVC</option>
      <option value="physics">ENGINEERING PHYSICS</option>
      <option value="english">COMMUNICATIVE ENGLISH</option>
      <option value="beee">BEEE</option>


    `;
  }


    else if (branch === "me" && year === "1" && sem === "2") {
    subject.innerHTML += `
      <option value="devc">DEVC</option>
      <option value="physics">ENGINEERING PHYSICS</option>
      <option value="english">COMMUNICATIVE ENGLISH</option>
      <option value="beee">BEEE</option>


    `;
  }

    else if (branch === "ai" && year === "1" && sem === "2") {
    subject.innerHTML += `
      <option value="devc">DEVC</option>
      <option value="physics">ENGINEERING PHYSICS</option>
      <option value="english">COMMUNICATIVE ENGLISH</option>
      <option value="beee">BEEE</option>
      <option value="DS">DATA STRUCTURE</option>
      

    `;
  }




    else if (branch === "aids" && year === "1" && sem === "2") {
    subject.innerHTML += `
      <option value="devc">DEVC</option>
      <option value="physics">ENGINEERING PHYSICS</option>
      <option value="english">COMMUNICATIVE ENGLISH</option>
      <option value="beee">BEEE</option>
      <option value="DS">DATA STRUCTURE</option>
      

    `;
  }




    else if (branch === "eee" && year === "1" && sem === "2") {
    subject.innerHTML += `
      <option value="devc">DEVC</option>
      <option value="physics">ENGINEERING PHYSICS</option>
      <option value="english">COMMUNICATIVE ENGLISH</option>
      <option value="beee">BEEE</option>


    `;
  }



    else if (branch === "ds" && year === "1" && sem === "2") {
    subject.innerHTML += `
      <option value="devc">DEVC</option>
      <option value="physics">ENGINEERING PHYSICS</option>
      <option value="english">COMMUNICATIVE ENGLISH</option>
      <option value="beee">BEEE</option>
      <option value="DS">DATA STRUCTURE</option>
      

    `;
  }



    else if (branch === "csc" && year === "1" && sem === "2") {
    subject.innerHTML += `
      <option value="devc">DEVC</option>
      <option value="physics">ENGINEERING PHYSICS</option>
      <option value="english">COMMUNICATIVE ENGLISH</option>
      <option value="beee">BEEE</option>
      <option value="DS">DATA STRUCTURE</option>
      

    `;
  }



    else if (branch === "cse" && year === "1" && sem === "2") {
    subject.innerHTML += `
      <option value="devc">DEVC</option>
      <option value="physics">ENGINEERING PHYSICS</option>
      <option value="english">COMMUNICATIVE ENGLISH</option>
      <option value="beee">BEEE</option>
      <option value="DS">DATA STRUCTURE</option>
      

    `;
  }    

  else {
    subject.innerHTML += `
      <option value="none">No Subjects Available</option>
    `;
  }
}

function showLink() {
  let sub = document.getElementById("subject").value;
  let box = document.getElementById("downloadBox");

  // ✅ Add Your PDF Links Here

  if (sub === "java") {
    box.innerHTML = `
      <a href=" https://drive.google.com/file/d/1Snw7soFJTR2J1c8rkKtcu9nx1eECrlXZ/view?usp=drivesdk " target="_blank" class="btn">
        View Java Question Bank
      </a>`;
  }

  if (sub === "ds") {
    box.innerHTML = `
      <a href=" https://drive.google.com/file/d/17QvOVDq0ozVvYJ8yWIpQKvrx9qxjofte/view?usp=drivesdk " target="_blank" class="btn">
        View Data Structures Question Bank
      </a>`;
  }

  if (sub === "devc") {
    box.innerHTML = `
      <a href="https://drive.google.com/file/d/1FDB1U46RA8F8sA5-LNMiDow7JDMLDjD5/view?usp=drivesdk  " target="_blank" class="btn">
        View DEVC Question Bank
      </a>`;
  }


    if (sub === "beee") {
    box.innerHTML = `
      <a href="  https://drive.google.com/file/d/1eaSVD6RBEddcAPOcp-9-DLK1LRe-YanT/view?usp=drivesdk   " target="_blank" class="btn">
        View BEEE Bank
      </a>`;
  }


    if (sub === "c") {
    box.innerHTML = `
      <a href=" https://drive.google.com/file/d/1AumMkFIbAbwKfrwImZ4c-NV5CJbbAXu3/view?usp=drivesdk    " target="_blank" class="btn">
        View IP Question Bank
      </a>`;
  }


    if (sub === "lac") {
    box.innerHTML = `
      <a href=" https://drive.google.com/file/d/1anVtnWNFQmsQvsP4vpFD5Tof972deENY/view?usp=drivesdk  " target="_blank" class="btn">
        View LAC Question Bank
      </a>`;
  }

  if (sub === "signals") {
    box.innerHTML = `
      <a href="      " target="_blank" class="btn">
        View Signals Question Bank
      </a>`;
  }


  if (sub === "english") {
    box.innerHTML = `
      <a href="https://drive.google.com/file/d/1huOjIGT2jbWh9rP7YISvmIejz-EG4yZp/view?usp=drivesdk" target="_blank" class="btn">
        View Communicative English Question Bank
      </a>`;
  }

  if (sub === "physics") {
    box.innerHTML = `
      <a href="   https://drive.google.com/file/d/1rodYv4k2XtpLzD2vEXdOdr7f8NOsZVpo/view?usp=drivesdk   " target="_blank" class="btn">
        View Engineering Physics Question Bank
      </a>`;
  }
}


