const DB = require("../data/db-config");
const tbl = "tasks";

const getAll = () => {
	return DB(tbl);
};
const getAllWithProjectInfo = () => {
	return DB(tbl)
		.select([
			"projects.name as project_name",
			"projects.description as project_description",
			"tasks.id",
			"tasks.completed",
			"tasks.description",
			"tasks.notes"
		])
		.join("projects", "projects.id", "=", "tasks.project_id");
};
const getById = id => {
	return DB(tbl).where({ id });
};
const getForProject = id => {
	return DB(tbl).where({ project_id: id });
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
	getById,
	getAllWithProjectInfo,
	getForProject
};