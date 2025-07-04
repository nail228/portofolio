import {createSelector} from "@reduxjs/toolkit";
import {getCounter} from "@/entities/Counter/model/selectors/getCounter/getCounter.ts";
import {CounterSchema} from "@/entities/Counter";


export const getCounterValue = createSelector(
    getCounter,
    (counter:CounterSchema)=>counter.value,
)