import {useState} from "react";
import classes from './home.module.scss'

export default function HomePage(){

    const [count, setCount]=useState(0);

    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }

    return(
        <div>
            <h1>{count}</h1>
            <button className={classes.btn} onClick={increment}>
                click
            </button>
            <button onClick={decrement}>
                click
            </button>
        </div>
    )

}