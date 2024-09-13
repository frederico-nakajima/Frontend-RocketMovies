import { Container,Form,Avatar } from './styles';
import { Input } from '../../components/Input'
import { FiArrowLeft,FiMail,FiLock,FiUser, FiCamera } from 'react-icons/fi';
import {Link} from 'react-router-dom'
import { Button } from '../../components/Button';



export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft/>
                    Voltar
                </Link>
            </header>

            <Form>
            <Avatar>
                <img 
                src="https://github.com/frederico-nakajima.png"
                    alt="Foto do usuário"
                    />

                <label htmlFor="avatar">
                    <FiCamera/>

                    <input
                    id='avatar'
                    type='file'
                    />
                </label>
            </Avatar>
            <Input
                placeholder="Nome"
                type="text"
                icon={FiUser}
                />

                <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                />

                <Input
                placeholder="Senha atual"
                type="current-password"
                icon={FiLock}
                /> 

                <Input
                placeholder="Nova senha"
                type="new-password"
                icon={FiLock}
                />  

                < Button  title="Salvar"/>  
            </Form>
        </Container>
    )
}
