jQuery(document).ready(function(){
"use strict";
	$('#submit').click(function(){

		var action = $('#contactform').attr('action');

		$("#message").fadeOut(200,function() {
		$('#message').hide();

 		$('#submit')
			.attr('disabled','disabled');

		$.post(action, {
			name: $('#name').val(),
			email: $('#email').val(),
			phone: $('#phone').val(),
			comments: $('#comments').val()
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').fadeIn(200);
				$('.hide').hide(0);
				$('#submit').removeAttr('disabled');
//				if(data.match('success') != null) $('#contactform').fadeOut('slow');

			}
		);

		});

		return false;

	});




			$('#startsubmit').on('click', function() {
                debugger;
                var file1 = $("#imageUpload")[0].files[0];
                var name = $('#name').val();
                var parents = $('#parents').val();
                var address = $('#address').val();
                var mobileno = $('#mobileno').val();
                var date = $('#date').val();
                var gender = $('#gender').val();
                var email = $('#email').val();
                var ielts = $('#TravelPreference').val();
                var listening = $('#listening').val();
                var reading = $('#reading').val();
                var writing = $('#writing').val();
                var speaking = $('#speaking').val();
                var ieltstraining = $('#ieltstraining').val();
                var box = $('input[name=trainingtype]:checked').val();
                var tenschoolname = $('#ten-school-name').val();
                var tenpercentscored = $('#ten-percent-scored').val();
                var tenyop = $('#ten-yop').val();
                var tenengscore = $('#ten-eng-score').val();
                var tenmathscore = $('#ten-math-score').val();
                var twelveschoolname = $('#twelve-school-name').val();
                var twelvepercentscored = $('#twelve-percent-scored').val();
                var twelveyop = $('#twelve-yop').val();
                var twelveengscore = $('#twelve-eng-score').val();
                var twelvemathscore = $('#twelve-math-score').val();
                var bachelorsschoolname = $('#bachelors-school-name').val();
                var bachelorspercentscored = $('#bachelors-percent-scored').val();
                var bachelorsyop = $('#bachelors-yop').val();
                var bachelorsengscore = $('#bachelors-eng-score').val();
                var bachelorsmathscore = $('#bachelors-math-score').val();
                var mstersschoolname = $('#msters-school-name').val();
                var msterspercentscored = $('#msters-percent-scored').val();
                var mstersyop = $('#msters-yop').val();
                var mstersengscore = $('#msters-eng-score').val();
                var mstersmathscore = $('#msters-math-score').val();
                var country = $('#country').val();
                var collegepreference1 = $('#college-preference-1').val();
                var collegepreference2 = $('#college-preference-2').val();
                var collegepreference3 = $('#college-preference-3').val();
                var collegepreference4 = $('#college-preference-4').val();
                var collegepreference5 = $('#college-preference-5').val();
                var coursepreference1 = $('#course-preference-1').val();
                var coursepreference2 = $('#course-preference-2').val();
                var coursepreference3 = $('#course-preference-3').val();
                var coursepreference4 = $('#course-preference-4').val();
                var coursepreference5 = $('#course-preference-5').val();
                var reference = $('#reference').val();
                var comment = $('#comment').val();
                var file2 = $("#fileInput")[0].files[0];
                var check = $('input[name=check]:checked').val();
               

                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;


                if (file1 == undefined){
                    alert('Please Upload Your Images');
                    return false;
                }

                if (!regex.test(email)) {
                    alert('Please Enter Valid Email');
                    $('#applicantsemail').focus();
                    return false;
                }

                if (file2 == undefined){
                    alert('Please Upload Your CV');
                    return false;
                }
                if (check != 'check') {
                	alert("Please accept Terms & Conditions");
                	return false;
                }

 
               

                if (name != '' && email != '' && mobileno != '' && parents != '' && date != '' && gender != '') {
                    
                    $('#divLoading').show();

                    var payload = new FormData();

                    payload.append("file1", file1);
                    payload.append("name", name);
                    payload.append("parents", parents);
                    payload.append("address", address);
                    payload.append("mobileno", mobileno);         
                    payload.append("date", date);
                    payload.append("gender", gender);
                    payload.append("email", email);
                    payload.append("ielts", ielts);
                    payload.append("listening", listening);
                    payload.append("reading", reading);
                    payload.append("writing", writing);
                    payload.append("speaking", speaking);
                    payload.append("ieltstraining", ieltstraining);
                    payload.append("box", box);
                    payload.append("tenschoolname", tenschoolname);
                    payload.append("tenpercentscored", tenpercentscored);
                    payload.append("tenyop", tenyop);
                    payload.append("tenengscore", tenengscore);
                    payload.append("tenmathscore", tenmathscore);

                    payload.append("twelveschoolname", twelveschoolname);
                    payload.append("twelvepercentscored", twelvepercentscored);
                    payload.append("twelveyop", twelveyop);
                    payload.append("twelveengscore", twelveengscore);
                    payload.append("twelvemathscore", twelvemathscore);

                    payload.append("bachelorsschoolname", bachelorsschoolname);
                    payload.append("bachelorspercentscored", bachelorspercentscored);
                    payload.append("bachelorsyop", bachelorsyop);
                    payload.append("bachelorsengscore", bachelorsengscore);
                    payload.append("bachelorsmathscore", bachelorsmathscore);

                    payload.append("msterschoolname", mstersschoolname);
                    payload.append("msterpercentscored", msterspercentscored);
                    payload.append("msteryop", mstersyop);
                    payload.append("msterengscore", mstersengscore);
                    payload.append("mstermathscore", mstersmathscore);
                    payload.append("country", country);
                    payload.append("collegepreference1", collegepreference1);
                    payload.append("collegepreference2", collegepreference2);
                    payload.append("collegepreference3", collegepreference3);
                    payload.append("collegepreference4", collegepreference4);
                    payload.append("collegepreference5", collegepreference5);

                    payload.append("coursepreference1", coursepreference1);
                    payload.append("coursepreference2", coursepreference2);
                    payload.append("coursepreference3", coursepreference3);
                    payload.append("coursepreference4", coursepreference4);
                    payload.append("coursepreference5", coursepreference5);
                    payload.append("reference", reference);
                    payload.append("comment", comment);
                    payload.append("file2", file2);
                   
                    

                    $.ajax({          

                        url: "http://mailer.fleapo.net/Globalic/StartApplication",
                        type:'post',
                        cache:false,
                        contentType: false,
                        processData:false,
                        data:payload,
                       

                        // data: ({ "form_name": form_name, "to_name": to_name, "date": date, "flightnumber": flightnumber, "conn1": conn1, "conn2": conn2, "conn3": conn3, "conn4": conn4, "formproblem": formproblem, "toproblem": toproblem, "ford": ford, "fordn": fordn, "forcc": forcc, "forbb": forbb, "news": news, "problem": problem, "connecting": connecting, "reservation": reservation, "text": text, "airline": airline, "title": title, "name": name, "surname": surname, "country": country, "city": city, "email": email, "phone": phone, "address": address, "postcode": postcode, "alone": alone, "refno": refno, "FellowDetails": JSON.stringify(arr)})
                        success: function(data) {
                            debugger;
                         alert("Your Details Submitted Succesfully")
                         },
                        error: function(error) {
                            debugger;
                           alert("Your Details Not Submitted")
                        }
                    }).done(function() {
                        $('#divLoading').hide();
                      window.location.href= 'index.html';
                    });
                } else {
                    alert('Please Fill All Details');
                    
                }
                return false;
            });




});



