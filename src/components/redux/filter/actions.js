export const deleteContact = contactId => {
  return {
    type: 'filter/deleteContact',
    payload: contactId,
  };
};

export const searchContact = value => {
  return {
    type: 'filter/searchContact',
    payload: value,
  };
};
