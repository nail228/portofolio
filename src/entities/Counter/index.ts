import {counterReducer} from "@/entities/Counter/model/slice/counterSlice.ts";
import {Counter} from "@/entities/Counter/ui/Counter.tsx";
import type{CounterSchema} from "@/entities/Counter/model/types/counterSchema.ts";



export{
    counterReducer,
    Counter,
    CounterSchema,
}