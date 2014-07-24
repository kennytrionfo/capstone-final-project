$(document).ready(function() {		
  $('#buttonsend').click( function() {
	
		var name    = $('#name').val();
		var subject = $('#subject').val();
		var email   = $('#email').val();
		var message = $('#message').val();
		
		$('.loading').fadeIn('fast');
		
		if (name != "" && subject != "" && email != "" && message != "")
			{

				$.ajax(
					{
						url: './sendemail.php',
						type: 'POST',
						data: "name=" + name + "&subject=" + subject + "&email=" + email + "&message=" + message,
						success: function(result) 
						{
							$('.loading').fadeOut('fast');
							if(result == "email_error") {
								$('#email').css({"background":"#FFFCFC","border":"2px solid #ffadad"}).next('.require').text(' !');
								$('label[for="email"] span').css({"border":"none", "background":"#ffadad"});
							} else {
								$('#name, #subject, #email, #message').val("","Name","Subject","Email","Message");
								$('<div class="success-contact">Your message has been sent successfully. Thank you! </div>').insertBefore('.contactform-area');
								$('<div class="success-contact success-position">Your message has been sent successfully. Thank you! </div>').insertBefore('.contactform-area2');
								$('.success-contact').fadeOut(5000, function(){ $(this).remove(); });
							}
						}
					}
				);
				return false;
				
			} 
		else 
			{
				$('.loading').fadeOut('fast');
				if(name == "","Name") { 
					$('#name').css({"background":"#FFFCFC","border":"2px solid #ffadad"}) 
					$('label[for="name"] span').css({"border":"none", "background":"#ffadad"})
				};
				if(subject == "","Subject") {
					$('#subject').css({"background":"#FFFCFC","border":"2px solid #ffadad"})
					$('label[for="subject"] span').css({"border":"none", "background":"#ffadad"})
				};
				if(email == "","Email" ) {
					$('#email').css({"background":"#FFFCFC","border":"2px solid #ffadad"})
					$('label[for="email"] span').css({"border":"none", "background":"#ffadad"})
				};
				if(message == "","Message") {
					$('#message').css({"background":"#FFFCFC","border":"2px solid #ffadad"});
					$('label[for="message"] span').css({"border":"none", "background":"#ffadad"})
				}
				return false;
			}
	});
	
	$("#name").focus(function () { $('label[for=name] span').css({"border":"none","background":"#59BA47"}); });
	$("#subject").focus(function () { $('label[for=subject] span').css({"border":"none","background":"#59BA47"}); });
	$("#email").focus(function () { $('label[for=email] span').css({"border":"none","background":"#59BA47"}); });
	$("#message").focus(function () { $('label[for=message] span').css({"border":"none","background":"#59BA47"}); });
	
	$('#name, #subject, #email, #message').focus(function(){
		$(this).css({"border":"none","background":"#f8fff7","border":"2px solid #59ba47"});
	});      	
});