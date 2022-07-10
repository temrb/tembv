import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { store, AppState } from '../redux/store'

export const useAppDispatch = store.dispatch

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
