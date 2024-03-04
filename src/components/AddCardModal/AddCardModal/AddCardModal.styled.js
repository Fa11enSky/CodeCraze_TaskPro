import styled from "styled-components"
import { Field } from "formik"

export const ModalDiv = styled.div`
font-family: Poppins;
color: rgba(255, 255, 255, 1);

width: 335px;
max-height: 900px;

border-radius: 8px;
border: 1px;
background: rgba(21, 21, 21, 1);
border: 1px solid rgba(190, 219, 176, 0.5);
padding: 24px
`

export const H3 = styled.h3`
font-size: 18px;
font-weight: 500;
line-height: 27px;
letter-spacing: -0.32px;
text-align: left;
margin-bottom: 24px;
`


export const TitleInput = styled(Field)`
font-family: Poppins;
font-size: 14px;
font-weight: 400;
line-height: 21px;
letter-spacing: -0.32px;
text-align: left;
color: rgba(255, 255, 255, 1);

background-color: inherit;
width: 287px;
height: 49px;
border-radius: 8px;
border: 1px solid rgba(190, 219, 176, 1);
opacity: 40%;
padding: 14px 18px;
margin-bottom: 14px;

&:focus {
    opacity: 100%;
    outline: none;
}
`

export const DescriptionTextArea = styled(Field)`
font-family: Poppins;
font-size: 14px;
font-weight: 400;
line-height: 18px;
letter-spacing: -0.32px;
text-align: left;

color: rgba(255, 255, 255, 1);
background-color: inherit;
width: 287px;
height: 154px;
border-radius: 8px;
border: 1px solid rgba(190, 219, 176, 1);
opacity: 40%;
padding: 14px 18px;
margin-bottom: 24px;

resize: none;

&:focus {
    opacity: 100%;
    outline: none;
}

`

export const Layout = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
margin-bottom: 14px;
`

export const RadioButtonDiv = styled.div`
display: flex;
    gap: 10px;
`

export const RadioBtn = styled(Field)`
position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const RadioLabel = styled.label`
    display: inline-block;
    position: relative; /* Для позиціонування кружечка */
    width: 14px; /* Розмір батьківського елементу */
    height: 14px;
    border-radius: 50%;
    
    cursor: pointer;

    /* Змініть кольори за необхідності */
    &.blue {
        background-color: rgba(143, 161, 208, 1);
        
        transition: background-color, 0.3s;
  &:hover {
    background-color: rgba(143, 161, 208, 0.5);
  }
    }

    &.red {
        background-color: rgba(224, 156, 181, 1);

        transition: background-color, 0.3s;
  &:hover {
    background-color: rgba(224, 156, 181, 0.5);
  }
    }

    &.green {
        background-color: rgba(190, 219, 176, 1);

        transition: background-color, 0.3s;
  &:hover {
    background-color: rgba(190, 219, 176, 0.5);
  }
    }

    &.grey {
        background-color: rgba(255, 255, 255, 0.3);

        transition: background-color, 0.3s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
    }

    span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 12px;
        height: 12px;
        border-radius: 50%;
        
        background-color: inherit;
        border: 2px solid rgba(21, 21, 21, 1);

        opacity: 0;
        transition: border, opacity 0.3s;
    }

    input:checked ~ span {
    opacity: 1;
    }
`

export const StyledP = styled.p`
font-size: 12px;
font-weight: 400;
line-height: 18px;
letter-spacing: -0.32px;
text-align: left;
opacity: 40%;

`

export const SubmitButton = styled.button`
display: flex;
flex-direction:row;
align-items: center;
justify-content: center;
position: relative;
width: 287px;
height: 49px;
padding: 10px 0px 11px 0px;
border-radius: 8px;
border: none;
background: rgba(190, 219, 176, 1);
transition: background 0.3s;

p {
    margin-left: 8px;
    font-family: Poppins;
font-size: 14px;
font-weight: 500;
line-height: 21px;
letter-spacing: -0.32px;
color: rgba(22, 22, 22, 1);

}

&:hover {
    background: rgba(190, 219, 176, 0.5);
     span::before, span::after{
        transform: rotate(360deg);
        transition: rotate, 0.3s;
     }

}

`

export const SubmitSpan = styled.span`
 position: absolute;
top: 50%;
left: 112px;
transform: translate(-50%, -50%);
width: 28px;
height: 28px;
border-radius: 8px;
background: rgba(22, 22, 22, 1);


&::before {
    content: ' ';
    position: absolute;
    top: 10px;
    left: 14px;
    width: 4px;
    height: 4px;
    border: 1px solid white;
    border-width:0 0 1px 1px ;
}

&::after {
    content: ' ';
    position: absolute;
    top: 14px;
    left: 10px;
    width: 4px;
    height: 4px;
    border: 1px solid rgba(255, 255, 255, 1);
    border-width: 1px 1px 0 0;
}
`