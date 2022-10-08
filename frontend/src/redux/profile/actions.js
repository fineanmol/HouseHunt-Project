// eslint-disable-next-line import/no-cycle
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

export const getContacts = () => ({
  type: PROFILE_GET_CONTACTS,
});

export const getContactsSuccess = (contacts, currentUser) => {
  return {
    type: PROFILE_GET_CONTACTS_SUCCESS,
    payload: { contacts, currentUser },
  };
};

export const getContactsError = (error) => ({
  type: PROFILE_GET_CONTACTS_ERROR,
  payload: error,
});

export const getConversations = (userId) => ({
  type: PROFILE_GET_CONVERSATIONS,
  payload: userId,
});
export const getConversationsSuccess = (conversations, selectedUser) => ({
  type: PROFILE_GET_CONVERSATIONS_SUCCESS,
  payload: { conversations, selectedUser },
});

export const getConversationsError = (error) => ({
  type: PROFILE_GET_CONVERSATIONS_ERROR,
  payload: error,
});

export const addMessageToConversation = (
  currentUserId,
  selectedUserId,
  message,
  allConversations
) => ({
  type: PROFILE_ADD_MESSAGE_TO_CONVERSATION,
  payload: { currentUserId, selectedUserId, message, allConversations },
});

export const createConversation = (
  currentUserId,
  selectedUserId,
  allConversations
) => {
  return {
    type: PROFILE_CREATE_CONVERSATION,
    payload: { currentUserId, selectedUserId, allConversations },
  };
};

export const searchContact = (keyword) => ({
  type: PROFILE_SEARCH_CONTACT,
  payload: keyword,
});

export const changeConversation = (userId) => ({
  type: PROFILE_CHANGE_CONVERSATION,
  payload: userId,
});
