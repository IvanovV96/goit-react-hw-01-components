import styled from '@emotion/styled';

export const Table = styled.table`
  text-align: center;
  margin: 50px auto 0px auto;
  border-collapse: collapse;
  border: 3px solid purple;
  th {
    padding: 10px;
    border-collapse: collapse;
    border: 3px solid purple;
  }
`;
export const TableHead = styled.thead`
  background-color: teal;
`;
export const TableBody = styled.tbody`
  tr {
    border-collapse: collapse;
    border: 3px solid purple;
    td {
      padding: 10px;
      border-collapse: collapse;
      border: 3px solid purple;
    }
  }
`;
