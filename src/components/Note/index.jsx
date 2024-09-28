import { Container,StarsContainer } from './styles';
import {Tag} from '../../components/Tag'
import { IoMdStar,IoMdStarOutline } from "react-icons/io";
import { RatingStars } from '../../components/RatingStars'; 



export function Note({data, ...rest}){
  

    return(
        <Container {...rest}>

            
            <h1>{data.title}</h1>

            <RatingStars rating={data.rating} />
            
            <p>
                {data.description}
            </p>

            <p>{data.text}</p>
         
            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag =><Tag key={tag.id} title={tag.name}/>)
                                
                          
                     
                    }
                </footer>
            }
            
            
        </Container>
    )
}
           

