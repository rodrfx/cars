import styled from 'styled-components';
import imageLg from '../../assets/footer-image-lg.png';
import imageMd from '../../assets/footer-image-md.png';
import imageSm from '../../assets/footer-img-sm.png';

export const Container = styled.footer`
	background-image: url(${imageSm});
	background-repeat: no-repeat;
	background-size: cover;

	height: 35.5rem;
	margin-top: calc(2.5rem - 13px);

	@media (min-width: 361px) {
		background-image: url(${imageMd});
		height: 33.96rem;
	}

	@media (min-width: 769px) {
		height: 33.96rem;
		background-image: url(${imageLg});
		background-position: right center;
	}

	@media (min-width: 1024px) {
		max-width: 1366px;
		margin: 0 auto;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;

	color: ${(props) => props.theme.white};
	padding: 2.5rem 1.5rem 0;

	h1 {
		font-weight: 400;
		line-height: 1.5;
		margin-bottom: 0.490625rem;

		&.headingDisplayMd {
			display: none;
		}

		@media (min-width: 361px) {
			&.headingDisplaySm {
				display: none;
			}

			&.headingDisplayMd {
				display: block;

				@media (min-width: 768px) {
					font-size: 3.5rem;
					line-height: 1.5;
					margin-bottom: 1rem;
				}
			}
		}
	}

	p {
		font-weight: 300;
		line-height: 2;
		text-align: right;
		margin-bottom: 1rem;
		max-width: 47ch;

		&.paragraphDisplayMd {
			display: none;
		}

		@media (min-width: 361px) {
			&.paragraphDisplaySm {
				display: none;
			}

			&.paragraphDisplayMd {
				display: block;
				@media (min-width: 768px) {
					text-align: right;
					font-size: 1.25rem;
					line-height: 2;
					margin-bottom: 2rem;
				}
			}
		}
	}

	button {
		color: ${(props) => props.theme.white};
		border: solid ${(props) => props.theme.white};
		padding: 0.1563rem 3.41rem;
		border-radius: 2.51px;
		background: transparent;
		font-weight: 500;
		line-height: 2;

		@media (min-width: 1024px) {
			height: 3rem;
			width: 17.065rem;
		}
	}

	@media (min-width: 1024px) {
		padding: 5.0625rem 9.8125rem 0;
	}
`;
