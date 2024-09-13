import { Container,Profile,Brand,InputHeader  } from './styles';
import { RiShutDownLine } from "react-icons/ri";

export function Header(){
    return(
        <Container>
           
           <main>
               <Brand>
                    <h2>Rocketnotes</h2>
                </Brand>
               
                         <InputHeader placeholder='Pesquisar pelo título'>
                         </InputHeader>
               
                         <Profile to="/profile">
                    <div>
                        <strong>Frederico Nakajima</strong>
                        <span>sair</span>
                    </div>
               
                    <img
                    src='https://github.com/frederico-nakajima.png'
                    alt='foto do usuário'
                    />
                         </Profile>
           </main>
              

           
                
        </Container>
    )
}
                
                
            
