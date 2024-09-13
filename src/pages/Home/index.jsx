import { Container,Content,NewNote } from './styles';
import { Header } from '../../components/Header';
import { FiPlus } from 'react-icons/fi';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section'




export function Home(){
    return(
        <Container>
         

            <Header/>

           
            <div className="h1newnote">
                <h1>Meus filmes</h1>
                <NewNote to="/new">
                    <FiPlus/>
                    Criar nota
                </NewNote>
            </div>

            <Content>
                
                  
                <Note data={{
                    title:'Interestellar',
                    stars:4,
                    stars: [true, true, true, true, false], 
                    text:'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.',
                    
                    tags: [
                        {id:'1', name: 'react'},
                        {id:'2', name: 'rocketseat'}
                    ]
                    }}
                />

                <Note data={{
                    title:'Interestellar',
                    
                    stars: [true, true, true, true, false], 
                    text:'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.',
                    
                    tags: [
                        {id:'1', name: 'react'},
                        {id:'2', name: 'rocketseat'}
                    ]
                    }}
                />

                    
            </Content>

           
        </Container>
    )
}
             
                
                     
                
              

              
                