import axios from "axios";
//TODO: Checkout createAction from react-redux

export function SendMessage(msg, context) {
    return function (dispatch) {
        dispatch({ type: "Send_Message" });
        axios.post('/sendMessage', {
            message: msg,
            context: context
        }).then((response) => {
            response.data.response.forEach((res) => {
                console.log(response.data.context);
                let temp = {
                    response: res,
                    context: response.data.context
                };
                dispatch({ type: "Message_Sent", payload: temp });
            });
        }).catch((response) => {
            dispatch({ type: "Message_Sent_Err", payload: response });
        });
    };
}

export function getIntents() {
    return function (dispatch) {
        axios.get('/getIntents').then((response) => {
            dispatch({ type: "Update_Intents", payload: response });
        }).catch((response) => {
            dispatch({ type: "Message_Sent_Err", payload: response });
        });
    };
}

export function getEntities() {
    return function (dispatch) {
        axios.get('/getEntities').then((response) => {
            dispatch({ type: "Update_Entities", payload: response });
        }).catch((response) => {
            dispatch({ type: "Message_Sent_Err", payload: response });
        });
    };
}

export function updateIntents(intent, text) {
    return function (dispatch) {
        dispatch({ type: "Intents_Updating" });
        axios.post('/updateIntents', {
            intent: intent,
            text: text
        }).then((response) => {
            dispatch({ type: "Intents_Updated", payload: response });
        }).catch((response) => {
            dispatch({ type: "Intents_Updated_Err", payload: response });
        });
    };
}

export function updateEntities(entity, text) {
    let entityData = entity.split(" : "); //Entity Name : Entity Type
    return function (dispatch) {
        dispatch({ type: "Entities_Updating" });
        axios.post('/updateEntities', {
            entity: entityData[0],
            type: entityData[1],
            value: text
        }).then((response) => {
            dispatch({ type: "Entities_Updated", payload: response });
        }).catch((response) => {
            dispatch({ type: "Entities_Updated_Err", payload: response });
        });
    };
}

//Action without Thunk
export function UpdateMsg(msg) {
    
    return {
        type: "Update_Message",
        payload: msg
    };
}

export function UpdateFocusedSentence(msg) {
    console.log(`focused on ${msg.text}`);
    return {
        type: "Update_Focused_Sentence",
        payload: msg
    };
}
