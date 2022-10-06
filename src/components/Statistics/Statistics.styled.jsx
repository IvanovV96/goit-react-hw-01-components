import styled from "@emotion/styled";

export const Container = styled.section`
    display:flex;
    flex-direction: column;
    align-items: center;
    h2{
        text-transform: uppercase;
    }
    `
export const List = styled.ul`
    display: flex;
    list-style:none`

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: #${getBgColor}
    `

function getBgColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}