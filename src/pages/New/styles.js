import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 750px;
    
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-rows: 105px 85px 100px;
    grid-template-areas:
    "header"
    "link"
    "content";

   

    >main{
        grid-area: content;

        width: 1137px;
        height:550px;
        overflow-y: scroll;
        padding-right: 24px;
        margin: 0 auto 65px;

       
      

        .inputs{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 40px;
            margin: 20px 2px;

        }
        .buttons{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 40px;

            :nth-child(1){
                background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
                color: ${({ theme }) => theme.COLORS.PINK};
            }
            :nth-child(2){
                color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
            }
            
        }
        
       

        .tags{
            display: flex;
            align-items: center;
            height: 88px;
            gap: 24px;
            flex-wrap: wrap;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
            padding: 16px;
            border-radius: 8px;

        
        }
    }

   
            

    

`;

export const TopLink = styled.div`
    
    margin:40px auto 24px auto ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1137px;
    color: ${({ theme }) => theme.COLORS.PINK}; 

    >button{
        color: ${({ theme }) => theme.COLORS.PINK};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        display: flex;
        align-items: center;
        font-size: 16px;
        border:none;
     }


`;


export const Form = styled.form`
    
    margin: 0 auto 0px;
    height: 651px;
    >header{
        display: flex;
        align-items: center;
        justify-content: space-between;

       

       
    }
    

`;