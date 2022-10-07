import { List, ListItem, Dot } from "./FriendListItem.styled"

export const FriendListItem = ({friends}) =>  {
    return (
        <List>
            {friends.map(({id, avatar, name, isOnline}) => {
               return  <ListItem key = {`id-${id}`}>
                    <Dot prop={isOnline}></Dot>
                    <img src={avatar} alt={name} width="48" />
                    <p>{name}</p>
                </ListItem>
            })}
        </List>
    )
}