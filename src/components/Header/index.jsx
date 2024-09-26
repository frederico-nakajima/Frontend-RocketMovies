import { Container,Profile,Brand,InputHeader,Logout  } from './styles';
import { useAuth } from '../../hooks/auth';
import{ api } from '../../services/api';

import { Navigate, useNavigate } from 'react-router-dom';

export function Header(){
    const { signOut,user } = useAuth();

    
    const navigate = useNavigate();

    function handleSignOut(){
        navigate("/");
        signOut();

    }



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
                                <Logout onClick={handleSignOut}>
                                    sair
                                </Logout>
                                
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
                
                
            
