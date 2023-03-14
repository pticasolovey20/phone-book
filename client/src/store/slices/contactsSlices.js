import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async (params, thunkAPI) => {
	try {
		const { data } = await axios.get("/api/contacts");
		return data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
	try {
		const { data } = await axios.post("/api/contacts", contact);
		return data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
	try {
		await axios.delete(`/api/contacts/${id}`);
		return id;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

const initialState = {
	contacts: [],
	filteredContacts: [],
	loading: false,
	error: "",
};

const contactsSlice = createSlice({
	name: "contacts",
	initialState,
	reducers: {
		filterContacts: (state, action) => {
			const value = action.payload.toLowerCase();

			if (value) {
				state.filteredContacts = state.contacts.filter((contact) => contact.name.toLowerCase().includes(value));
			} else {
				state.filteredContacts = state.contacts;
			}
		},
	},
	extraReducers: (builder) => {
		// fetch contacts

		builder.addCase(fetchContacts.pending, (state) => {
			state.loading = true;
		});

		builder.addCase(fetchContacts.fulfilled, (state, action) => {
			state.contacts = action.payload;
			state.filteredContacts = action.payload;
			state.error = "";
			state.loading = false;
		});

		builder.addCase(fetchContacts.rejected, (state, action) => {
			state.error = action.payload;
		});

		// add contact

		builder.addCase(addContact.fulfilled, (state, action) => {
			state.contacts.push(action.payload);
			state.filteredContacts.push(action.payload);
		});

		builder.addCase(addContact.rejected, (state, action) => {
			state.error = action.payload;
		});

		//delete contact

		builder.addCase(deleteContact.fulfilled, (state, action) => {
			state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
			state.filteredContacts = state.contacts.filter((contact) => contact.id !== action.payload);
		});

		builder.addCase(deleteContact.rejected, (state, action) => {
			state.error = action.payload;
		});
	},
});

export default contactsSlice.reducer;
export const { filterContacts } = contactsSlice.actions;
