"use strict";

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

// let x = new Contact("James", "jamesbosley123@gmail.com", "313-100-9000", "He's a good friend");

class AddressBook {
    constructor() {
        this.contacts = [
            new Contact("Snoopy", "snoopy@cooldog.com", "111-111-1111", "a cool friend"),
            new Contact("Porkchop", "porkchop@cooldog.com", "111-123-1111", "a cool dog"),
        ];
    }
    add(info) {
        this.contacts.push(info);
    }
    deleteAt(index) {
        this.contacts.splice(index,1);
    }
    print() {
        for (let i = 0; i < this.contacts.length; i++) {
            console.log(`${i}. Name: ${this.contacts[i].name}, Email: ${this.contacts[i].email}, Phone: ${this.contacts[i].phone}, Relation: ${this.contacts[i].relation}`);
        }
    }
} 

const book = new AddressBook();

while(true) {
    let choice = prompt("Add, Delete, Print, or Quit?");
    if (choice === "Quit") {
        console.log("Bye Bye.");
        break;
    } else if (choice === "Print") {
        book.print();
    } else if (choice === "Delete") {
        book.deleteAt(prompt("Index to delete?"));
    } else if (choice === "Add") {
        book.add(new Contact(
            prompt("Enter a name."),
            prompt("Enter an email."),
            prompt("Enter a phone number."),
            prompt("Enter a relation.")
        ));
    }

}
