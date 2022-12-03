
import { persistReducer,persistStore } from "redux-persist";
import { createStore} from 'redux';
import * as base from './../_redux/BaseStore/baseSlice';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const baseReducer = persistReducer({debug:false,storage:AsyncStorage, key: 'state-base',blacklist:[]},base.Slice.reducer)

const baseStore = createStore(baseReducer);

persistStore(baseStore);
