import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color:${({theme}) => theme.COLORS.BACKGROUND_BROWN};

    border: none;
    border-radius: 10px;

    padding: 32px;
    margin-bottom: 16px;

    >h1{
        flex: 1;
        text-align: left;
        font-family: "Roboto Slab";
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color:${({theme}) => theme.COLORS.WHITE};
    }
    >p{
        color:${({theme}) => theme.COLORS.GRAY_200};
        text-align: justify;
        margin: 15px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
   

    >footer{
        width: 100%;
        display: flex;
        margin-top: 24px;
    }




`;


export const StarsContainer = styled.div`
  display: flex;
  gap: 4px; 
  margin-top: 8px 0; 
`;
