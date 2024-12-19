import { Container,Content,NewNote } from './styles';
import { Header } from '../../components/Header';
import { FiPlus } from 'react-icons/fi';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section'
import { useState, useEffect } from "react";
import { api } from '../../services/api'
import { useNavigate } from "react-router-dom";


export function Home(){
    const [notes, setNotes] = useState([])
    const [search, setSearch] = useState("");
    
    const navigate = useNavigate();


    function handleDetails(id){
        navigate(`/details/${id}`);
    }

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}`);
            
            setNotes(response.data.notesWhithTags);
        }

        fetchNotes();
    }, [search]); 
 
    
 
     

    return(
        <Container>
         
         <Header setSearch={setSearch} />

           
            <div className="h1newnote">
                <h1>Meus filmes</h1>
                <NewNote to="/new">
                    <FiPlus/>
                    Adicionar filme
                </NewNote>
            </div>

            <main>
                <Content>
                
                    <Section>
                        {notes.length > 0 ? (
                            notes.map(note => (
                                <div key={String(note.id)} onClick={() => handleDetails(note.id)}>
                                    <Note data={note} />
                
                                </div>
                            ))
                        ) : (
                            <p>Nenhuma nota encontrada</p>
                        )}
                    </Section>
                
                </Content>
            </main>
              
           
        </Container>
    )
}


                    

             
                
                     
                
              

              
                