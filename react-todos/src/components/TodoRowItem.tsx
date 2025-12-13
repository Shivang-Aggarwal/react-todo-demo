function TodoRowItem(props: {
    rowNumber: number, 
    rowDescription: string, 
    rowAssigned: string
}) {
    return (
        <tr>
            <th scope="row">{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}

export default TodoRowItem