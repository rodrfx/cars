import { Icon } from '@iconify/react';
import sliderImg from '../../assets/slider.png';
import { CardCarItem } from '../CardCarItem';
import { ArrowBtn, Container, Slider } from './styles';

type Car = {
	id: number;
	carName: string;
	speed: number;
	calendar: number;
	energy: number;
	people: number;
	photo: string;
};

type TableCarsProps = {
	cars: Car[];
};

export const TableCars = ({ cars }: TableCarsProps) => {
	return (
		<>
			<Container>
				<ArrowBtn>
					<Icon icon="bi:chevron-left" className={'leftArrow'} />
				</ArrowBtn>
				{cars.map((car) => (
					<CardCarItem
						key={car.id}
						carName={car.carName}
						speed={car.speed}
						calendar={car.calendar}
						energy={car.energy}
						people={car.people}
						photo={car.photo}
					/>
				))}
				<ArrowBtn>
					<Icon icon="bi:chevron-left" className={'rightArrow'} />
				</ArrowBtn>
			</Container>
			<Slider src={sliderImg} alt="imagem de uma barra de progresso" />
		</>
	);
};
