const DB = require("../data/db-config");
const tbl = "projects";

const getAll = () => {
	return DB(tbl);
};

const getById = id => {
	return DB(tbl).where({ id });
};
const insert = fields => {
	return DB(tbl).insert(fields);
};

const update = (id, fields) => {
	return DB(tbl)
		.where({ id })
		.update(fields);
};

const deleteEntry = ({ id }) => {
	return DB(tbl)
		.where({ id })
		.delete();
};

module.exports = {
	getAll,
	insert,
	update,
	deleteEntry,
	getById
};