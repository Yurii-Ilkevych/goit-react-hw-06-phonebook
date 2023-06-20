

export const addContact = (contact) => {
  return {
    type: "contact/addContact",
    payload: {
      contact,
    },
  };
};