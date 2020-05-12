module.exports = class Employee {
    constructor(name, id, email, title){
        this.id = id;
        this.title = title;
        this.name = name;
        this.email = email;
    }
    getId(){
        return this.id;
    }
    getTitle(){
        return this.title;
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }

getRole() {
    return this.constructor.name;
}
}