import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width:1px ;
    border-bottom-style:solid ;
    border-bottom-color:${({theme}) => theme.COLORS.BACKGROUND_700} ;

  
    

  >main{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1167px;
    margin: 0 auto;

  }

`;

export const Brand = styled.div`
    
    >h2{
        font-size: 24px;
        color:${({theme}) => theme.COLORS.PINK} ;
    }
`;

export const InputHeader = styled.input`
    width: 633px;
    height: 56px;
    margin: 24px 64px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.GRAY_300};
    border-radius:10px;
    border: none;
    padding: 19px 24px;

      &:focus {
        outline: none; 
    }

`;

export const Profile = styled(Link)`
    display: flex;
    flex-shrink: 0;
   
   


    >img{
        width: 56px;
        height: 56px;
        border-radius: 50%;

    }

    >div{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        
        margin-right: 9px;
        
        >strong{
            font-size: 14px;
            color:${({theme}) => theme.COLORS.WHITE};
            
            }
            }
            
`;             
            
            
export const Logout = styled.span`
            
                font-size: 14px;
                color:${({theme}) => theme.COLORS.GRAY_300};
              
 `;           
