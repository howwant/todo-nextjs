import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";
import { AnyAction, combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import todo from "./todo";

const rootReducer = combineReducers({
    todo: todo.reducer,
});

const reducer = (state: any, action: AnyAction) =>{
    if (action.type === HYDRATE ) {
        const nextState = {
            ...state,
            ...action.payload,
        };
        if (state.count) nextState.count = state.count;
        return nextState;
    }
    return rootReducer(state, action);
};

//* 스토어 타입
export type RootState = ReturnType<typeof rootReducer>;

const initStore = () => {
    return configureStore({
        reducer,
        devTools: true
});
};

export const wrapper = createWrapper(initStore);

//* 타입이 지원되는 커스텀 useSelector 만들기
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;