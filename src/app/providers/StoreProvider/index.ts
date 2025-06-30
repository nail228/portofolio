import {StoreProvider} from "./ui/StoreProvider.tsx";
import {createReduxStore} from "./config/store.ts";
import type {StateSchema} from "@/app/providers/StoreProvider/config/StateSchema.ts";


export {
    StoreProvider,
    createReduxStore,
    StateSchema
}