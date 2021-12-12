import React,{useState} from "react"

const Counter = (props) => {
    // let count = 0
    // console.log(props)
    // const [value, setValue] = useState(props.value) // useState() может принитмать любые значения: массивы, объекты и т..д.
    const {value} = props
    // const [tags, setTags] = useState(['tag1', 'tag2', 'tag3'])

    const formatValue = () => {
        return value === 0? 'empty' : value
    }
    const getBageClasses = () => {
        let classes = 'badge m-2 '
        classes += value === 0? 'bg-secondary' : 'bg-info'
        return classes
    }
    
    // const handleIncrement = () => {
    //     // console.log('increment')
    //     // value ++
    //     // console.log(value)
    //     // setValue(value + 1)
    //     // setValue(value + 1) //схлопнится с предыдущим и прибавит только 1
    //     // setValue((prevState) => prevState + 1) //prevState -> текущее состояние, то есть 0+1
    //     // setValue((prevState) => prevState + 1) //prevState -> текущее состояние, то есть 1+1
        
    // }

    // const haandlDecrement = () => {
    //     // setValue((prevState) => prevState - 1)
    // }

    // const handleTagChange = (id) => {
    //     // setTags(['tag4', 'tag5'])
    //     setTags((prevState) => prevState.filter(tag => tag !== id)) //удаляем эл из массива, который не равен id
    //     console.log(id)
    // }

    // const renderTags = () => {
    //     // if(tags.length === 0) return 'No tags' //перезапишем через тернарное выр.
    //     return tags.length !== 0? tags.map(tag => (
    //                 <li 
    //                     key={tag} 
    //                     className='btn btn-info btn-sm m-2'
    //                     onClick = {() => handleTagChange(tag)}
    //                 >
    //                     {tag}
    //                 </li> //key это УНИКАЛЬНЫЙ id //в этом примере используем tag, так как именно тут он у нас уникален
    //             )): 'No tags'
    // }

    // if (tags.length !== 0) {
    //     return <ul>{renderTags()}</ul>
    // }
    // const imageUrl = 'https://picsum.photos/200'
    return (  
        <div>
        {/* {props.children} */}
            <span>{props.name}</span>
        {/* <img src={imageUrl} alt="image" /> */}
            <span className= {getBageClasses()} > {formatValue()}</span>
            <button 
                className='btn btn-info btn-sm m-2' 
                onClick = {() => props.onIncrement(props.getId)}
            >
                +
            </button>

            <button 
                className='btn btn-info btn-sm m-2' 
                onClick = {() => props.onDecrement(props.getId)}
            >
                -
            </button>

            <button 
                className="btn btn-danger btn-sm2 m-2" 
                // onClick={props.onDelete}
                onClick={() => props.onDelete(props.getId)}
            >
                Dellete
            </button>
        </div>
    )
}

export default Counter