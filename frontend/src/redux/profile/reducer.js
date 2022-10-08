import {
  PROFILE_GET_CONTACTS,
  PROFILE_GET_CONTACTS_SUCCESS,
  PROFILE_GET_CONTACTS_ERROR,
  PROFILE_GET_CONVERSATIONS,
  PROFILE_GET_CONVERSATIONS_SUCCESS,
  PROFILE_GET_CONVERSATIONS_ERROR,
  PROFILE_ADD_MESSAGE_TO_CONVERSATION,
  PROFILE_CREATE_CONVERSATION,
  PROFILE_SEARCH_CONTACT,
  PROFILE_CHANGE_CONVERSATION,
} from '../actions';

const INIT_STATE = {
  allContacts: null,
  contacts: null,
  conversations: null,
  error: '',
  searchKeyword: '',
  loadingContacts: false,
  loadingConversations: false,
  currentUser: null,
  selectedUser: null,
  selectedUserId: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case PROFILE_GET_CONTACTS:
      return { ...state, loadingContacts: false };

    case PROFILE_GET_CONTACTS_SUCCESS:
      return {
        ...state,
        loadingContacts: true,
        allContacts: action.payload.contacts,
        contacts: action.payload.contacts,
        currentUser: action.payload.currentUser,
      };

    case PROFILE_GET_CONTACTS_ERROR:
      return { ...state, loadingContacts: false, error: action.payload };

    case PROFILE_GET_CONVERSATIONS:
      return { ...state, loadingConversations: false };

    case PROFILE_GET_CONVERSATIONS_SUCCESS:
      return {
        ...state,
        loadingConversations: true,
        conversations: action.payload.conversations,
        selectedUserId: action.payload.selectedUser,
      };

    case PROFILE_GET_CONVERSATIONS_ERROR:
      return { ...state, loadingConversations: false, error: action.payload };

    case PROFILE_CHANGE_CONVERSATION:
      return {
        ...state,
        selectedUser: state.allContacts.find((x) => x.id === action.payload),
      };

    case PROFILE_ADD_MESSAGE_TO_CONVERSATION:
      return { ...state };

    case PROFILE_CREATE_CONVERSATION:
      return { ...state };

    case PROFILE_SEARCH_CONTACT:
      if (action.payload === '') {
        return { ...state, contacts: state.allContacts };
      }
      // eslint-disable-next-line no-case-declarations
      const keyword = action.payload.toLowerCase();
      // eslint-disable-next-line no-case-declarations
      const searchedContacts = state.allContacts.filter(
        (item) => item.name.toLowerCase().indexOf(keyword) > -1
      );
      return { ...state, contacts: searchedContacts };

    default:
      return { ...state };
  }
};
