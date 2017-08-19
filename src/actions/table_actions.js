export const CREATE_CARD = "CREATE_CARD";

export const createCard = (text, tableId) => ({
  type: CREATE_CARD,
  text,
  tableId
});
