import styled from 'styled-components';

export const Container = styled.main`
	width: 17.375rem;
	margin-top: 5rem;
	padding: 1.5rem 1.90625rem;

	border: 1px solid ${(props) => props.theme.primary};
	border-radius: 24px;

	position: relative;

	img {
		width: 14.125rem;
		position: absolute;
		top: -5.125rem;
		left: 1rem;
	}

	@media (min-width: 1024px) {
		width: 17.5625rem;
	}
`;

export const InfoCar = styled.div`
	h2 {
		margin-bottom: 1rem;
		text-align: center;
		font-size: 1.5rem;
		font-weight: 400;
		line-height: 1.5;
	}

	div {
		display: flex;
		align-items: center;
		gap: 24px;
		margin-bottom: 1.5rem;

		p {
			line-height: 1.5;
		}

		svg {
			font-size: 24px;
		}
	}

	button {
		color: ${(props) => props.theme.primary};
		height: 3rem;
		width: 13.5625rem;
		background: transparent;
		border: 1px solid ${(props) => props.theme.primary};
		border-radius: 21px;
		font-weight: 500;

		transition: background-color 0.2s, color 0.2s;

		&:hover {
			color: ${(props) => props.theme.white};
			background-color: ${(props) => props.theme.primary};
		}
	}
`;
