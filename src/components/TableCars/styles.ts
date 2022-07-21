import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	max-width: 1366px;
	gap: 24px;
	margin: 0 24px;
	overflow-y: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}

	@media (min-width: 930px) {
		justify-content: center;
	}

	@media (min-width: 1024px) {
		justify-content: space-around;
		margin: 0 auto;
	}
`;

export const ArrowBtn = styled.button`
	display: none;
	border: 0;
	font-size: 0;
	background: transparent;

	svg {
		font-size: 40px;
		color: ${(props) => props.theme.primary};

		&.leftArrow {
			color: ${(props) => props.theme.Tertiary};
			cursor: not-allowed;
		}

		&.rightArrow {
			transform: rotate(180deg);
		}
	}

	@media (min-width: 1024px) {
		display: block;
	}
`;

export const Slider = styled.img`
	display: none;
	margin: 3rem auto 2.5rem;

	@media (min-width: 1024px) {
		display: block;
	}
`;
