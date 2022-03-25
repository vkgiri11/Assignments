import { v4 as uuidv4 } from "uuid";

let users = [];

export const getAllUsers = (req, res) => {
	res.send(users);
};

export const createUser = (req, res) => {
	const newUser = req.body;

	const newUserId = uuidv4();

	users.push({ ...newUser, id: newUserId });

	res.send(`User with name ${newUser.firstName} added`);
};

export const getUser = (req, res) => {
	const { id } = req.params;

	const queriedUser = users.find((user) => user.id === id);

	res.send(queriedUser);
};

export const deleteUser = (req, res) => {
	const { id } = req.params;

	users = users.filter((user) => user.id !== id);

	res.send(`User with id:${id} deleted`);
};

export const updateUser = (req, res) => {
	const { id } = req.params;
	const { firstName, lastName, age } = req.body;

	const user = users.find((user) => user.id === id);

	if (firstName) user.firstName = firstName;
	if (lastName) user.lastName = lastName;
	if (age) user.age = age;

	res.send(`User with name ${user.firstName} modified`);
};
