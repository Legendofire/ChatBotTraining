export default function reducer(
    state = {
        // chatLog: [{ text: '', isOwn: false },{ text: '', isOwn: false },{ text: '', isOwn: false },{ text: '', isOwn: false },{ text: '', isOwn: false },{ text: '', isOwn: false },{ text: '', isOwn: false },{ text: '', isOwn: false },{ text: '', isOwn: false },{ text: '', isOwn: false },{ text: '', isOwn: false },{ text: '', isOwn: false },{ text: '', isOwn: false },{ text: '', isOwn: false },{ text: '', isOwn: false },{ text: '', isOwn: false },{ text: '', isOwn: false },{ text: '', isOwn: //false },{ text: '', isOwn: false },{ text: '', isOwn: false },{ text: '', isOwn: false },{ text: '', isOwn: false },{ text: '', isOwn: false },{ text: '', isOwn: false },{ text: '', isOwn: false },{ text: '', isOwn: false },{ text: '', isOwn: false },{ text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum laudantium deserunt nemo omnis sed quis reprehenderit, porro quisquam, alias aliquid commodi at recusandae ex voluptas quas numquam ratione ut maxime temporibus, //hic? Iste voluptas aut illo, nobis deleniti debitis culpa.', isOwn: false }],
        chatLog: [],
        currentMsg: "",
        chatContext: null,
        sendingMsg: false,
        choices: [],
        error: null,
        intents: null,
        entities: null,
        sentenceInFocus: "",
        entityUpdating: false,
        intentUpdating: false
    },
    action
) {
    let newState = { ...state };
    switch (action.type) {
        case "Update_Message":
            return {
                ...newState,
                currentMsg: action.payload
            };
            break;
        case "Update_Focused_Sentence":
            return {
                ...newState,
                sentenceInFocus: action.payload.text
            };
            break;
        case "Send_Message":
            newState.chatLog.push({ text: state.currentMsg, isOwn: true });
            return {
                ...newState,
                sendingMsg: true,
                error: null
            };
            break;
        case "Message_Sent":
            newState.chatLog.push({ text: action.payload.response, map: !!action.payload.context.atm_location, isOwn: false });
            newState.choices = [];
            newState.choices = action.payload.context.choices ? action.payload.context.choices.split(',') : [];
            action.payload.context.atm_location = null;
            if (action.payload.context) {
                action.payload.context.pc = true;
            }
            newState.chatContext = action.payload.context;
            return {
                ...newState,
                currentMsg: "",
                sendingMsg: false
            };
            break;
        case "Message_Sent_Err":
            return {
                ...newState,
                error: action.payload,
                sendingMsg: false
            };
            break;
        case "Update_Intents":
            return {
                ...newState,
                intents: action.payload.data,
                sendingMsg: false
            };
            break;
        case "Update_Entities":
            return {
                ...newState,
                entities: action.payload.data,
                sendingMsg: false
            };
            break;
        case "Entities_Updating":
            return {
                ...newState,
                entityUpdating: true
            };
            break;
        case "Entities_Updated":
            return {
                ...newState,
                entityUpdating: false
            };
            break;
        case "Intents_Updating":
            return {
                ...newState,
                intentUpdating: true
            };
            break;
        case "Intents_Updated":
            return {
                ...newState,
                intentUpdating: false
            };
            break;
        case "Intents_Updated_Err":
            return {
                ...newState,
                intentUpdating: false
            };
            break;
        case "Entities_Updated_Err":
            return {
                ...newState,
                entityUpdating: false
            };
            break;
        default:
            return {
                ...newState
            };
    }
}
