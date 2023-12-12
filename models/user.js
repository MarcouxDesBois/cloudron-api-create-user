module.exports = class User {
    constructor(id, email, fallbackEmail, displayName, role, username, isVisitor) {
        this.id = id
        this.email = email
        this.fallbackEmail = fallbackEmail
        this.displayName = displayName
        this.role = role
        this.username = username
        this.isVisitor = isVisitor
    }
}