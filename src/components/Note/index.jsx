import { Container,StarsContainer } from './styles';
import {Tag} from '../../components/Tag'
import { IoMdStar,IoMdStarOutline } from "react-icons/io";


export function Note({data, ...rest}){
   

    return(
        <Container {...rest}>

            
            <h1>{data.title}</h1>

            <StarsContainer>
                {
                    data.stars &&
                    data.stars.map((filled, index) =>
                    filled ? <IoMdStar key={index} size={20} color="#FF859B" /> : <IoMdStarOutline key={index} size={20} color="#FF859B" />
                    )
                }
            </StarsContainer>
            


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
           

