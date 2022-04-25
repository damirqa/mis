module.exports = class StateDto {
    id;
    name;
    status;
    serial_number;
    project_id;
    active;
    tasks;

    constructor(model) {
        this.id = model.id
        this.name = model.name
        this.status = model.status
        this.serial_number = model.serial_number
        this.project_id = model.project_id
        this.active = model.active
    }
}