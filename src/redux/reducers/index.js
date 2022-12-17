import { combineReducers } from "redux";
import mediaReducer from "./mediaReducer";
import libraryReducer from "./libraryReducer";
import { persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    transforms: [
        encryptTransform({
            secretKey: process.env.REACT_APP_ENCRYPTED_PERSIST_KEY,
        }),
    ],
};

const reducer = combineReducers({
    media: mediaReducer,
    library: libraryReducer,
});

const persistingReducer = persistReducer(persistConfig, reducer);

export default persistingReducer;
