(function(){
	

	$('.form').validate({
		
        rules: {
			
			name: {
                required: true,
				minlength: 2,
                maxlength: 50
			},
			
			email: {
				
                required: true
			},
			
			fone: {
				
                required: true
			},
			
			msg: {
                required: true
			}
			
			
		},
		
        messages: {
			
			name: {
				required: "Campo obrigatório",
                minlength: "Campo obrigatório",
                maxlength: "Campo obrigatório"
			},	
			
			email: {
				required: "Campo obrigatório"
			},
			
			fone: {
				required: "Campo obrigatório"
			},
			
			msg: {
				required: "Campo obrigatório"
			}
			
		},
		
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                target: '#formTarget',
				
                success: function(data) {                                      
					
					swal({   
						title: "Mensagem Enviada!",   						
						text: '',
						type: "success",
						timer: 5000,						
						showConfirmButton: false 
					});						
					
                    $(".form").clearForm();
				}
			});
		}
		
	});		
	
	
})();