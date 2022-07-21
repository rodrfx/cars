import { Container, Content } from './styles';

export const Footer = () => {
	return (
		<Container>
			<Content>
				<h1 className="headingDisplaySm">O que são</h1>
				<p className="paragraphDisplaySm">
					A sigla SUV significa Sport Utility Vehicle -- ou seja, veículo
					utilitário esportivo. As SUVs costumam ter porte avantajado, além de
					interior espaçoso e possibilidade de trafegar dentro e fora da cidade.
				</p>

				<h1 className="headingDisplayMd">Mustang</h1>
				<p className="paragraphDisplayMd">
					O Ford Mustang é um automóvel desportivo produzido pela Ford Motor
					Company. O carro foi apresentado ao público em 17 de abril de 1964
					durante a New York World's Fair. O Mustang, apesar de ter sofrido
					grandes alterações ao longo dos anos é a mais antiga linha de
					automóveis da Ford.
				</p>
				<button type="button">Ver carros</button>
			</Content>
		</Container>
	);
};
