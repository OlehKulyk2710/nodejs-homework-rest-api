const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");
const { writeDataToFile } = require("../helpers");

const contactsPath = path.join(__dirname, "contacts.json");

const getContactsList = async () => {
  const contactsList = await fs.readFile(contactsPath);

  return JSON.parse(contactsList);
};

const getContactById = async (contactId) => {
  try {
    const contactsList = await getContactsList();
    const [contact] = contactsList.filter(
      (contact) => contact.id === contactId
    );
    return contact;
  } catch (error) {
    return null;
  }
};

const addContact = async (body) => {
  try {
    const newContact = { id: nanoid(), ...body };
    const contactsList = await getContactsList();
    contactsList.push(newContact);
    await writeDataToFile(contactsPath, contactsList);

    return newContact;
  } catch (error) {
    return null;
  }
};

const updateContact = async (contactId, body) => {
  try {
    const contactsList = await getContactsList();

    const contactIndex = contactsList.findIndex(
      (contact) => contact.id === contactId
    );

    if (contactIndex === -1) {
      return null;
    }

    const updatedContact = { id: contactId, ...body };
    contactsList[contactIndex] = { ...updatedContact };
    await writeDataToFile(contactsPath, contactsList);

    return updatedContact;
  } catch (error) {
    return null;
  }
};

const removeContact = async (contactId) => {
  try {
    const contactsList = await getContactsList();
    const contactIndex = contactsList.findIndex(
      (contact) => contact.id === contactId
    );

    if (contactIndex === -1) {
      return null;
    }

    const removedContact = contactsList.splice(contactIndex, 1);
    await writeDataToFile(contactsPath, contactsList);
    return removedContact;
  } catch (error) {
    return null;
  }
};

module.exports = {
  getContactsList,
  getContactById,
  addContact,
  updateContact,
  removeContact,
};
