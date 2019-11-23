$(document).ready(function () {
  $.get("/api/allProduct").then(function (dbProduct) {
    for (let index = 0; index < dbProduct.length; index++) {
      $("#product").append("<div class='product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12'>" +
			        					"<div class='product__thumb'>" +
											"<img src='/images/books/1.jpg'>" +
										"<div class='hot__box'>"+
												"<span class='hot-label'>"+dbProduct[index].plabel +"</span>"+
											"</div>"+
									"</div>	<div class='product__content content--center'>"+
											"<h4 id='productname'>"+ dbProduct[index].pname + "</h4><ul class='prize d-flex'><li>"+
                     dbProduct[index].pprice +"</li></ul></div></div>");
     
    }
  });

})

