import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `

export const UserInfo = styled.div`
    margin-top: 50px;
    padding: 20px;
    text-align: center;
    background-color: white`; 

export const UserPhoto = styled.img`
    width: 200px;
    height: 200px;
    border-radius:50%`;

export const UserName = styled.p`
    margin-bottom: 0;
    font-size: 18px;
    font-weight: 700`

export const Location = styled.p`
    margin-bottom: 0;
    margin-top: 0;
    color: grey`

export const Tag = styled.p`
    color: grey`

export const List = styled.ul`
    display: flex;
    list-style:none
    `

export const ListItem = styled.li`
    display: flex; 
    flex-direction: column;
    align-items: center;
    padding: 15px;
    color: grey;
    background-color: #e0e6da;
    border: 1px solid #cfa29f;
    ` 