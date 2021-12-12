import React,{useState} from "react";
import Counter from "./counter"

const CountersList = () => {
    const initialState = [
        {id:0, value:0, name: "Ненужная вещь"},
        {id:1, value:4, name: "Ложка"}, 
        {id:2, value:0, name: "Вилка"}, 
        {id:3, value:0, name: "Тарелка"}, 
        {id:4, value:0, name: "Набор минималиста"}
    ]
    const [counters, setCounter] = useState(initialState)

    const handlDelete = (getId) => {
        const newCounter = counters.filter(c => c.id !== getId)
        setCounter(newCounter)
    }

    const haandlDecrement = (getId) => {
        let dec = counters.map(element => {
            if (element.id === getId)
                {element.value --}
            return element
        })
        setCounter(dec)
    }

    const handleIncrement = (getId) => {
        let inc = counters.map(element => {
            if (element.id === getId)
                {element.value ++}
            return element
        })
        setCounter(inc)
    }

    const handleReset = () => {
        console.log('Reset')
        setCounter(initialState)
    }
    return (
    <>
        {counters.map((count) => (
            <Counter 
                key={count.id} 
                getId={count.id}
                // value={count.value} 
                // name={count.name} 
                // counter={count}
                onDecrement={haandlDecrement}
                onIncrement={handleIncrement}
                onDelete={handlDelete}
                {...count}
            /> 
                // {/* <span>{count.name}</span> */}
            // {/* </Counter> */}
        ))}
        <button className="btn btn-primary btn-sm m2" onClick={handleReset}>Сброс</button>
    </>
    )
}

export default CountersList