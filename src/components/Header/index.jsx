import { Container,Profile,Brand,InputHeader,Logout  } from './styles';
import { useAuth } from '../../hooks/auth';
import{ api } from '../../services/api';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg';



export function Header({ setSearch }){
    const { signOut,user } = useAuth();
    const [localSearch,setLocalSearch] = useState("");

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;
    const navigate = useNavigate();

    function handleSignOut(){
        navigate("/");
        signOut();

    }

    function handleSearchChange(e) {
        setLocalSearch(e.target.value); 
        setSearch(e.target.value);       
    }


    return(
        <Container>
           
           <main>
               <Brand>
                    <h2>Rocketnotes</h2>
                </Brand>
               
                         <InputHeader 
                            placeholder='Pesquisar pelo título'
                            value={localSearch}
                            onChange={handleSearchChange}  
                         />
                         
               
                         <Profile to="/profile">
                            <div>
                                <strong>{user.name}</strong>
                                <Logout onClick={handleSignOut}>
                                    sair
                                </Logout>
                            </div>
                                
                    
                            <img
                                src={avatarUrl}
                                alt={user.name}
                            />
                         </Profile>
           </main>
              

           
                
        </Container>
    )
}
                
                
            
