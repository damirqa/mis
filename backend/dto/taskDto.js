module.exports = class TaskDto {
    id;
    stateId;
    title;
    description;
    owner;

    constructor(model) {
        this.id = model.id
        this.stateId = model.stateId
        this.title = model.title
        this.description = model.description
        this.owner = model.owner
    }
}