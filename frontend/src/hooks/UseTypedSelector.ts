import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/reducers";

export const useTypedSelect: TypedUseSelectorHook<RootState> = useSelector