import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;
	width: 90%;
	top: 1rem;
	left: 1.5rem;
`;

export const Content = styled.div`
	color: red;
	display: flex;
	justify-content: space-between;
	align-items: center;

	button {
		border: 0;
		font-size: 0;
		background: transparent;

		svg {
			color: ${(props) => props.theme.white};
			font-size: 65px;
			transition: opacity 0.1s;

			&:hover {
				color: ${(props) => props.theme.Tertiary};
			}
		}
	}

	ul {
		display: flex;
		list-style: none;

		li {
			margin-right: 2.5rem;

			a {
				padding: 1rem 1.5rem;
				text-decoration: none;
				font-size: 1.25rem;
				font-weight: 500;
				line-height: 1.5;
				color: ${(props) => props.theme.white};

				&:hover {
					color: ${(props) => props.theme.Tertiary};
				}
			}

			svg {
				color: ${(props) => props.theme.white};
				font-size: 32px;
				cursor: pointer;

				&:hover {
					color: ${(props) => props.theme.Tertiary};
				}
			}

			&:last-child {
				margin: 0;
			}

			&.linkEnter {
				margin-right: 1rem;
			}

			@media (min-width: 1150px) {
				margin-right: 4.5rem;
			}
		}
	}
`;
