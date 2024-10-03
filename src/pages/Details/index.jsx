import { Container,HeaderLink,Tags,Content,} from './styles';
import { useState, useEffect } from 'react'
import { Header } from '../../components/Header';
import { api } from '../../services/api';
import { Tag } from '../../components/Tag';
import { FiArrowLeft } from 'react-icons/fi';
import { useParams, useNavigate } from "react-router-dom";
import { MdAccessTime } from "react-icons/md";
import { RatingStars } from '../../components/RatingStars';
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg';
import { useAuth } from '../../hooks/auth';
import { format, parseISO } from 'date-fns';


export function Details(){
    const [data, setData] = useState(null);
   
    const { user } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

    const params = useParams();
    const navigate = useNavigate();

    function handleBack(){
        navigate(-1);
    }
   

    useEffect(() => {
        async function fetchNote(){
            try {
                const response = await api.get(`/notes/${params.id}`);
                setData(response.data);
            } catch (error) {
                console.error("Erro ao buscar a nota:", error);
            }
        }

        fetchNote();

    },[params.id]);



    if (!data) {
        return <p>Carregando...</p>;
    }

    
    const formattedDate = format(parseISO(data.created_at), 'dd/MM/yy \'às\' HH:mm');
    
    return(
        <Container>
            <Header/>

            <HeaderLink>
                <button onClick={handleBack}>
                    <FiArrowLeft/>
                    Voltar
                </button>
            </HeaderLink>
                
               

            <main>
                <Content>
                   

                    <div className='stars'>
                            <h1>{data.title}</h1>
                            
                            <RatingStars rating={data.rating}/>
                    </div>

                    <p className="auth">
                        <img
                            src={avatarUrl}
                            alt={user.name}
                        />
                        <span>Por: {user.name}</span>
                        <MdAccessTime />
                        <span> {formattedDate}</span>
                    </p>
                    <Tags>
                        {   
                            data.tags.map(tag => (
                                <Tag 
                                    key={String(tag.id)}
                                    title={tag.name}
                                />
                            ))
                        }
                    </Tags>
                    <p className='description'>
                        {data.description}
                    </p>

                    
                        
                    
                    
                </Content>
            </main>
        </Container>
    )
}







