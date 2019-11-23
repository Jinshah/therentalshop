$(document).ready(function () {
 $.get("/api/allProduct/:id").then(function (dbProduct1) {
   
      console.log(dbProduct1);
    // $("#singlepname").append(dbProduct[index].pname);
       for (let index = 0; index < dbProduct1.length; index++) {
     dbProduct1[index].pname;
     
    }
  })
    
  });
