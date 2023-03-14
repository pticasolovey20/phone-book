require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const contacts = [
	{ name: "911", phone: "911", id: 1 },
	{ name: "Mother", phone: "+38099*****45", id: 2 },
	{ name: "Father", phone: "+38099*****73", id: 3 },
];

// get all contacts

app.get("/api/contacts", (request, response) => {
	response.json(contacts);
});

// add contact

app.post("/api/contacts", (request, response) => {
	const contact = {
		name: request.body.name,
		phone: request.body.phone,
		id: contacts.length + 1,
	};
	contacts.push(contact);
	response.json(contact);
});

//delete contact

app.delete("/api/contacts/:id", (request, response) => {
	const id = parseInt(request.params.id);
	const index = contacts.findIndex((contact) => contact.id === id);
	if (index !== -1) {
		contacts.splice(index, 1);
		response.status(204).send();
	} else {
		response.status(404).send("Contact not found");
	}
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
