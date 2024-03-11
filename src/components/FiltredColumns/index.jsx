import ColumnItem from "components/ColumnItem/ColumnItem";

export const FilteredColumns = (props) => {

    const { columns, filter } = props

    console.log(columns);
    console.log(filter);
    if (!columns.columns) return

    const filtredColumn = columns.columns.map(column => ({
        ...column,
        cards: column.cards.filter(card => {
            if (filter === 'all') return card;
            return card.label === filter;
        })
    }))
    return (<>{
        filtredColumn.map(el => {
            return <ColumnItem key={el._id} column={el} />;
        })
    }</>)

}