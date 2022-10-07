import { Table, TableHead, TableBody } from "./Transactions.styled"


export const Transactions = ({items}) => {
    
    return (<Table>
    <TableHead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </TableHead>
    <TableBody>
        {items.map(({id, type, amount, currency}) => {
            return  <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
        })}
    </TableBody>
    </Table>)
}