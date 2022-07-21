import { Icon } from '@iconify/react';
import { Container, Content } from './styles';

export const MenuDesktop = () => {
	return (
		<>
			<Container>
				<Content className="menuDesktop">
					<button>
						<Icon icon="carbon:logo-delicious" />
					</button>
					<nav>
						<ul>
							<li>
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#">Sobre</a>
							</li>
							<li>
								<a href="#">Tabela</a>
							</li>
							<li>
								<a href="#">Fale conosco</a>
							</li>

							<li className="linkEnter">
								<a href="#">Entrar</a>
							</li>
							<li>
								<Icon icon="ant-design:user-outlined" />
							</li>
						</ul>
					</nav>
				</Content>
			</Container>
		</>
	);
};
