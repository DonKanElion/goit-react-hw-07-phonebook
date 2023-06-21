// old shcool
export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilterValue = state => state.filter;

// NEW !!! місто get => use select.

export const selectVisibleContacts = state => {
const contacts = getContacts(state);
const filterValue = getFilterValue(state);

return !contacts ? [] : contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()))
};
