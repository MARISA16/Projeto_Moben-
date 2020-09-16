


		const numero = (prompt("Digite um número: "));
		
		let posicao_c = parseInt(numero[0]); //Centena
		let posicao_d = parseInt(numero[0]); // Dezenas
		let posicao_u = parseInt(numero[0]); //Unidade
		let posicao_e = parseInt(numero[1]); //Especiais

		const unidades=["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove"];
		const especiais=["Onze", "Doze", "Treze", "Catorze", "Quinze", "Dezeseis", "Dezsete", "Dezoito", "Deznove"]; 
		const dezenas=["Dez","Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];
		const centenas=["Cem", "Duzentos", "Trezentos", "Quatrocentos", "Quinhetos", "Seiscentos","Setescentos","Oitocentos", "Novecentos"];

		///Irá verificar o tamanho vetor e em seguida fará testes para descobrir a centena,dezena e unidade do número/

		//Imprimir unidadades
		if(numero.length === 1) {
			if (numero[0] == '0'||'1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9') {
              
        
                alert(unidades[posicao_u] + " reais")
				}
			}

		else if(numero.length === 2) {
			//Números entre 20 e 99
			if(numero[0]=='2'||'3'||'4'||'5'||'6'||'7'||'8'||'9' && numero[1]=='1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9') {
				alert(dezenas[posicao_d-1]+" e "+ unidades[posicao_u+1] + "reais");
			}

			//Dezenas
			else if ((numero[0]=='1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9') && numero[1]==="0") {
				alert(dezenas[posicao_d-1] + "reais");
			}
			
			//Imprimir Especiais
			else if (numero[0]=='1' && numero[1]=='0'||'1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9') {
				alert(especiais[posicao_e-1]+ "reais");
			}


		}