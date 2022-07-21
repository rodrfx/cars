import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 9;
	width: 75vw;
	max-width: 400px;
	height: 100vh;

	background: #ffffff;
	box-shadow: 3px 0px 9px rgba(0, 0, 0, 0.15);
	border-radius: 0px 24px 24px 0px;
`;

export const Content = styled.div`
	padding: 2rem 1.5rem;

	button {
		border: 0;
		font-size: 0;
		background: transparent;

		svg {
			color: #282828;
			font-size: 65px;
			margin-bottom: 2.5rem;
			transition: opacity 0.1s;

			&:hover {
				opacity: 0.8;
			}
		}
	}

	nav {
		ul {
			list-style: none;

			li {
				& + li {
					margin: 2rem 0;
				}

				a {
					color: ${(props) => props.theme.primary};
					font-size: 1.25rem;
					font-weight: 500;
					line-height: 1.5;
					text-decoration: none;
					padding: 0.563rem 0;
					transition: opacity 0.1s;

					&:hover {
						opacity: 0.8;
					}
				}
			}
		}
	}
`;

export const LinkHome = styled.a`
	position: relative;

	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 3.875rem;
		height: 2px;
		background: ${(props) => props.theme.primary};
	}
`;
