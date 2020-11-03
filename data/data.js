const contacts = [
    {
        "id": 1,
        "name": "Davies",
        "telephone": '0701023456'
    },
    {
        "id": 2,
        "name": "Wabuluka",
        "telephone": '0701023456'
    }
]

class Contacts {
    constructor(id, name, telephone) {
        this.id = id;
        this.name = name;
        this.telephone = telephone;
    }
}
module.exports = {Contacts, contacts};