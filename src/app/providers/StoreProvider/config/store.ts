import {configureStore} from "@reduxjs/toolkit";
import {StateSchema} from "./StateSchema.ts";
import {counterReducer} from "@/entities/Counter";


export function createReduxStore(initialState?: StateSchema): StateSchema {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools:__IS_DEV__,
        preloadedState: initialState,
    })
}


