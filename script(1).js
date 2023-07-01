  
var CSPIT = {
    yearOfEstablishment: 2005,
    location: "Anand, Gujarat, India",
    departments: ["CE", "IT", "CS", "EC", "EE", "CL", "ME"],
    getDetails: function() {
      console.log("Get Details: \n" + "\nYear of Establishment: " + this.yearOfEstablishment + "\nLocation: " + this.location + "\nDepartments: " + this.departments.join(", "));
    }
  };
  
  
  CSPIT.CE = Object.create(null);
  CSPIT.CE.totalStudents = 250;
  CSPIT.CE.totalFaculty = 30;
  CSPIT.CE.totalSemester = 8;
  CSPIT.CE.Subjects = 20;
  
  CSPIT.getDetails();
  // Retrieving all possible records from CSPIT
  console.log("CE Department Details:");
  for (var property in CSPIT.CE) {
   
      console.log(property + ": " + CSPIT.CE[property]);
    
  }
  console.log("All CSPIT Records:");
  for (var key in CSPIT) {
      if (CSPIT.hasOwnProperty(key)) {
      console.log(key + ": " + CSPIT[key]);
      }
  }
  
  
  