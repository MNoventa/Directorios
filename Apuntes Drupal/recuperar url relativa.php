<?php
	

	//Recuperar la url relativa de un archivo en Drupal 8
			
			//Con file_url()

				file_url(content.field_fondo.0['#item'].entity.uri.value);
				
				//Resultado: /sites/default/files/2019-05/Modulo_2_apadrina_F41556.jpg	


			//Sin file_url()

				content.field_fondo.0['#item'].entity.uri.value;

				//Resultado: public://2019-05/Modulo_2_apadrina_F41556.jpg

?>