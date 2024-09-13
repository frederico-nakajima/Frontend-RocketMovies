import { Container,Form,TopLink } from './styles';
import { Header } from '../../components/Header';
import { Textarea } from '../../components/Textarea'
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import {Link} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

export function New(){
    return(
        <Container>
            <Header/>


            <TopLink>
                    <Link to="/">
                        <FiArrowLeft/>
                        Voltar
                    </Link>
            </TopLink>

            <main>

              
                <Form>
                    
                    <header>
                        <h1>Novo filme</h1>
                        
                    </header>


                    <div className="inputs">
                        <Input placeholder="Título"/>
                        <Input placeholder="Sua nota (de 0 a 5)"/>
                    </div>



                    <Textarea placeholder="Observações"/>

                

                    <Section title="Marcadores">
                        <div className='tags'>
                            <NoteItem value="react"/>
                            <NoteItem isnew placeholder="Novo marcador"/>
                        </div>
                    </Section>

                    <div className="buttons">
                        <Button title="Excluir filme"/>
                        <Button title="Salvar alterações"/>
                    </div>
                </Form>
            </main>
        </Container>
    )
}



