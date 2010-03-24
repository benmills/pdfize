/*
* jquery.pdfiz.js, version 0.0.1
* website: http://github.com/benmills/pdfize
* author: Ben Mills
*
* -----------------------------------
* Pdfize takes anchor tag's href value and creates a lightbox window with the Google Document Viewer inside it to view the pdf
* -----------------------------------
* Example: $('a.pdf').pdfize(); 
*
*/

(function($){
 $.fn.pdfize = function() {
		var rendered = false;
		$("#pdfize_close_pdf").live('click', function(e){
			e.preventDefault();
			$("#pdfize_pdf_overlay").hide();
			$("#pdfize_pdf_viewer").hide();
		});
		
		$("body").append('<div id="pdfize_pdf_overlay" style="top:0;left:0;position:absolute;height:100%;width:100%;background-color: rgb(0, 0, 0);opacity: 0.5;display: none;"></div><div style="margin: 0px auto;top: 30px;left: 25%;position: absolute;width: 800px;display: none;" id="pdfize_pdf_viewer"></div>')
		
		$(this).click(function(e){
			e.preventDefault();
			$("#pdfize_pdf_viewer").show();
			$("#pdfize_pdf_overlay").show();
		});
		
		return this.each(function() {
			if ($(this).attr('href')) {
				var url = $(this).attr('href');
				if (!rendered) {
					$('#pdfize_pdf_viewer').html('<div><a href="#" id="pdfize_close_pdf">Close</a></div><iframe src="http://docs.google.com/gview?url='+url+'&embedded=true" style="width:800px; height:670px;" frameborder="0"></iframe>');
					rendered = true;
				}
			}
		});
 };
})(jQuery);