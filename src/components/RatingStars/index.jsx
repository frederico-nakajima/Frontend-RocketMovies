
import { FaStar } from 'react-icons/fa';
import { Container } from './styles';

export function RatingStars({ rating }) {
    const totalStars = 5;
    const filledStars = Math.round(rating); 

    return (
        <Container>
            {Array.from({ length: totalStars }, (_, index) => (
                <FaStar
                    key={index}
                    
                    color={index < filledStars ? "#FF859B" : "#e4e5e9"} 
                />
            ))}
        </Container>
    );
}
