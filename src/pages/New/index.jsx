import { Container,Form,TopLink } from './styles';
import { Header } from '../../components/Header';
import { Textarea } from '../../components/Textarea'
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import  { api }  from '../../services/api';

export function New(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");
    const [rating, setRating] = useState("");

    const navigate = useNavigate();


    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    function handleBack(){
        navigate(-1);
    }

    async function handleNewNote(){
        if(!title){
            return alert("Digite o título da filme");
        }

        if(!rating){
            return alert("Digite a avaliação do filme");
        }
        if (rating < 0 || rating > 5){
            return alert("Digite a avaliação do filme entre de 0 a 5");
        }
      
        if (!newTag && tags.length === 0) {
        return alert("Você deve adicionar pelo menos uma tag.");
    }
     

        await api.post("/notes", {
            title,
            rating,
            description,
            tags
           
        });
        alert("Nota criada com sucesso!");
        navigate(-1);
    }

    return(
        <Container>
            <Header/>
          

            <TopLink>
                <button onClick={handleBack}>
                    <FiArrowLeft/>
                    Voltar
                </button>
            </TopLink>
                        

            <main>

              
                <Form>
                    
                    <header>
                        <h1>Novo filme</h1>
                        
                    </header>


                    <div className="inputs">
                        <Input 
                            placeholder = "Título"
                            onChange = {e => setTitle(e.target.value)}
                        />
                        
                        <Input 
                            placeholder = "Sua nota (de 0 a 5)"
                            onChange={e => setRating(Number(e.target.value))}
                        />
                    </div>



                    <Textarea 
                        placeholder = "Observações"
                        onChange = {e => setDescription(e.target.value)}
                    />

                

                    <Section title= "Marcadores">
                        <div className="tags">
                            {
                                tags.map((tag, index) => (
                                    <NoteItem
                                        key={String(index)}
                                        value= {tag}
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }

                            <NoteItem 
                                isNew 
                                placeholder="Nova tag"
                                onChange={e => setNewTag(e.target.value)}
                                value={ newTag }
                                onClick={handleAddTag}
                                />
                        </div>
                    </Section>

                    <div className="buttons">
                        <Button title="Excluir filme"/>
                        <Button title="Salvar alterações" onClick= {handleNewNote}/>
                    </div>
                </Form>
            </main>
        </Container>
    )
}



