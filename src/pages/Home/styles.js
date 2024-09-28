import styled from 'styled-components';
import {Link} from 'react-router-dom'


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 105px 133px auto;
    grid-template-areas: 
    "header"
    "newnote"
    "content";
   

    background-color:${({theme}) => theme.COLORS.BACKGROUND_800};


    .h1newnote{
        grid-area:newnote ;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 1167px;
        margin: 0 auto;

        >h1{
            font-weight: 400;
        }
    }

    ::-webkit-scrollbar{
        width: 6px;
            

    }
    ::-webkit-scrollbar-thumb{
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 6px;
    }
`;



export const NewNote = styled(Link)`
    grid-area: newnote;

    background-color:${({theme}) => theme.COLORS.PINK};
    color:${({theme}) => theme.COLORS.BACKGROUND_900};
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    width: 207px;

    svg{
        margin-right: 8px;
    }

    
`;




export const Content = styled.div`
    grid-area: content;  
    width: 1167px;
    height: 617px;
    padding-right: 16px;
    margin: 0 auto 60px;
    overflow-y: scroll;
`;


