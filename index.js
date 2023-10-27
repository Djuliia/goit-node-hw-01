const contacts = require("./contacts");
const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactList = await contacts.listContacts();
      console.table(contactList);
      break;

    case "get":
      const contact = await contacts.getContactById(id);
      console.table(contact);

      break;
    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.table(newContact);
      break;

    case "remove":
      const deletedContact = await contacts.removeContact(id);
      console.table(deletedContact);

      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
