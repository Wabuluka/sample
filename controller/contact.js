const Contacts = require('../data/data');
const contactList = Contacts.contacts;
const contactClass = Contacts.Contacts;

class ContactController{
    // create one contact
    static createContact(req, res){
        const id = contactList.length + 1;
        const contact = new contactClass(
            id,
            req.body.name,
            req.body.telephone
        )
        contactList.push(contact);
        return res.send({
            message: "contact added",
            contact: contact
        })
    }
    // get all contacts in the list
    static getContacts(req, res){
        return res.send({
            data: contactList
        })
    }
    // get one contact
    static getContact(req, res){
        const oneContact = req.params.id
        const getOneContact = contactList.find(contact => contact.id == oneContact)
        return res.send({
            data: getOneContact
        })
    }
    // delete contact
    static deleteContact(req, res){
        const oneContact = req.params.id;
        const del = contactList.splice(oneContact, 1)
        return res.send({
            message: 'Contact Deleted'
        })
    }
    // edit contact
    static editContact(req, res){
        const oneContact = req.params.id;
        const getOneContact = contactList.find(contact => contact.id == oneContact);
        getOneContact.name = req.body.name;
        getOneContact.telephone = req.body.telephone;
        return res.send({
            data: getOneContact
        })
    }
}
module.exports = ContactController;