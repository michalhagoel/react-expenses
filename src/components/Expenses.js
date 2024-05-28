

import ExpenseItem from './ExpenseItem'

function Expenses(props) {

    return (
        <div className='expenses'>
            <div>
                {props.items.map((item, index) => (
                    <ExpenseItem
                    key={index}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                    />
                ))}
            </div>
        </div>

    )
}
export default Expenses