module.exports = class ProjectDto {
    id;
    name;
    type;
    description;
    owner;

    constructor(model) {
        this.id          = model.id;
        this.name        = model.name;
        this.type        = model.type;
        this.description = model.description;
        this.owner       = model.owner;
    }
}