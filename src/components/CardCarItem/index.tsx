import { Icon } from '@iconify/react';
import { Container, InfoCar } from './styles';

type CardProps = {
	carName: string;
	calendar: number;
	energy: number;
	speed: number;
	people: number;
	photo: string;
};

export const CardCarItem = ({
	carName,
	calendar,
	energy,
	speed,
	people,
	photo,
}: CardProps) => {
	return (
		<Container>
			<img
				src={photo}
				width="228px"
				alt="imagem de um carro da marca Mustang"
			/>

			<InfoCar>
				<h2>{carName}</h2>

				<div>
					<Icon icon="bi:calendar2-date" />
					<p>{calendar}</p>
				</div>
				<div>
					<Icon icon="fluent:top-speed-20-regular" />
					<p>{speed} km/h</p>
				</div>
				<div>
					<Icon icon="simple-line-icons:energy" />
					<p>{energy}/10</p>
				</div>
				<div>
					<Icon icon="fluent:people-20-regular" />
					<p>{people}/10</p>
				</div>
				<button type="button">Ver carro</button>
			</InfoCar>
		</Container>
	);
};
