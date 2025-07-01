import {Button, ButtonTheme} from "@/shared/ui/Button/Button.tsx";
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../model/slice/counterSlice.ts";
import {getCounterValue} from "../model/selectors/getCounterValue/getCounterValue.ts";


export const Counter=()=>{

    const dispatch=useDispatch();
    const counterValue=useSelector(getCounterValue)

    const increment=()=>{
        dispatch(counterActions.increment())

    }

    const decrement=()=>{

        dispatch(counterActions.decrement())
    }

    return(
        <div>
            <h1>
                value = {counterValue}
            </h1>
            <Button
                onClick={increment}
                theme={ButtonTheme.OUTLINE}
            >
                +
            </Button>
            <Button
                onClick={decrement}
                theme={ButtonTheme.OUTLINE}
            >
                -
            </Button>
        </div>
    )
}