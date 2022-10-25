const ADD_FILMS = 'ADD_FILMS';
const UPDATE_TEXT_ID = 'UPDATE_TEXT_ID';
const UPDATE_TEXT_TITLE = 'UPDATE_TEXT_TITLE';
const UPDATE_TEXT_SRC = 'UPDATE_TEXT_SRC'
const reducerSerial = (state, action) =>{
    switch (action.type) {
        case ADD_FILMS:
            let today = new Date();
            let now = today.toLocaleDateString('en-US');
            let object = {
                id: state.informationPost.textId,
                preview: state.informationPost.textSrc,
                title: state.informationPost.textTitle,
                dateYear: now
            }
            state.allGenre.push(object)
            break;
        case UPDATE_TEXT_ID:
            state.informationPost.textId = action.valueId;
            break;
        case UPDATE_TEXT_TITLE:
            state.informationPost.textTitle = action.valueTitle;
            break;
        case UPDATE_TEXT_SRC:
            state.informationPost.textSrc = action.valueSrc;
            break;
        default:
            return state;
    }
    return state;
}
export default reducerSerial;
export const actionCreaterAddFilms = () => ({type: ADD_FILMS})
export const actionCreaterGetValueId = (value) => ({type:UPDATE_TEXT_ID, valueId:value})
export const actionCreaterGetValueTitle = (value) => ({type:UPDATE_TEXT_TITLE, valueTitle:value})
export const actionCreaterGetValueSrc = (value) => ({type:UPDATE_TEXT_SRC, valueSrc:value})