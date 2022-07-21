import { Icon } from '@iconify/react';
import { useState } from 'react';
import bannerImageLg from '../../assets/banner-lg.png';
import bannerImageMd from '../../assets/banner-md.png';
import bannerImageSm from '../../assets/banner-sm.png';
import { useScreenWidth } from '../../hooks/useScreenWidth';
import { MenuDesktop } from '../MenuDesktop';
import { MenuMobile } from '../MenuMobile';
import { BtnHamburgerMenu, Container } from './styles';

export const Header = () => {
	const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(true);
	const screenWidth = useScreenWidth();

	const toggleMenuMobileOpen = () => {
		setIsMenuMobileOpen(!isMenuMobileOpen);
	};
	return (
		<Container>
			{screenWidth >= 1024 ? (
				<MenuDesktop />
			) : isMenuMobileOpen ? (
				<header>
					<BtnHamburgerMenu onClick={toggleMenuMobileOpen}>
						<Icon icon="ant-design:menu-outlined" />
					</BtnHamburgerMenu>
				</header>
			) : (
				<MenuMobile toggleMenuMobileOpen={toggleMenuMobileOpen} />
			)}

			<picture>
				<source srcSet={bannerImageLg} media="(min-width: 768px)" />
				<source srcSet={bannerImageMd} media="(min-width: 361px)" />
				<img src={bannerImageSm} alt="banner principal carro mustang" />
			</picture>
		</Container>
	);
};
