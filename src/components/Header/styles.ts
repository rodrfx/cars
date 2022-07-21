import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	max-width: 1366px;
	margin: 0 auto 5.375rem;

	header {
		position: absolute;
		top: 17px;
		left: 24px;
	}

	img {
		max-width: 100%;
	}
`;

export const BtnHamburgerMenu = styled.button`
	border: 0;
	font-size: 0;

	background: transparent;

	svg {
		color: ${(props) => props.theme.white};
		font-size: 42px;

		&:hover {
			color: ${(props) => props.theme.secondary};
		}
	}

	@media (min-width: 1024px) {
		display: none;
	}
`;
