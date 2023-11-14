function calcularNivel(vitorias, derrotas) {
	let saldoVitorias = vitorias - derrotas;
	let nivel = "";

	switch (true) {
		case vitorias < 11:
			nivel = "Ferro" 
			break;
		case vitorias < 21:
			nivel = "Bronze" 
			break;
		case vitorias < 51:
			nivel = "Prata" 
			break;
		case vitorias < 81:
			nivel = "Ouro" 
			break;
		case vitorias < 91:
			nivel = "Diamante" 
			break;
		case vitorias < 101:
			nivel = "Lendário" 
			break;
		default:
			nivel = "Imortal" 
			break;
	}

	return console.log(`O Herói tem saldo de ${saldoVitorias} vitórias e está no nível ${nivel}`);
}


calcularNivel(70, 20);