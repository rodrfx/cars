import { Icon } from '@iconify/react';
import { Container, Content, LinkHome } from './styles';

type MenuMobileProps = {
	toggleMenuMobileOpen: () => void;
};

export const MenuMobile = ({ toggleMenuMobileOpen }: MenuMobileProps) => {
	return (
		<Container>
			<Content className="menuDesktop">
				<button onClick={toggleMenuMobileOpen}>
					<Icon icon="carbon:logo-delicious" />
				</button>
				<nav>
					<ul>
						<li>
							<LinkHome href="#">Home</LinkHome>
						</li>
						<li>
							<a href="#">Fale conosco</a>
						</li>
						<li>
							<a href="#">Sobre</a>
						</li>
						<li>
							<a href="#">Tabela</a>
						</li>
					</ul>
				</nav>
			</Content>
		</Container>
	);
};
