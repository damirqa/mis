import axios from "axios";
import config from "../config.json"

const url = config.api_url + '/project'

export async function getProjects(user_id) {
    return await axios.post(url + '/all', {user_id})
}

export async function createProject(project) {
    return await axios.post(url + '/create', project)
}

export default {
    getProjects,
    createProject
}