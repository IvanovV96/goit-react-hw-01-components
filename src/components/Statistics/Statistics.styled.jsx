import styled from "@emotion/styled";

export const Container = styled.section`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    
    h2{
        text-transform: uppercase;
        background-color: white;
        padding: 20px 64px;
        margin: 0;
    }
    `


export const List = styled.ul`
    display: flex;
    list-style:none;
    
    `

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background-color: #${getBgColor};
    width: 60px;
    color: white;
    
    `

function getBgColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}