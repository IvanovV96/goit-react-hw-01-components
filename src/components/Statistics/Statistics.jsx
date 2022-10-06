import { Container, List, ListItem } from "./Statistics.styled"



export const Statistics = ({title, stats}) => {
    return (
        <Container>
            {title && (<h2>{title}</h2>)}
            <List>
            {stats.map(stat =>
                <ListItem key={stat.id}>
                    <span>{stat.label}</span>
                    <span>{stat.percentage}%</span>
                </ListItem>)}
            </List>
        </Container>
    )
}