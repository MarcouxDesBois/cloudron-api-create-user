module.exports = class Mailbox {
    constructor(name, ownerId, ownerType, active, storageQuota, messagesQuota) {
        this.name = name
        this.ownerId = ownerId
        this.ownerType = ownerType
        this.active = active
        this.storageQuota = storageQuota
        this.messagesQuota = messagesQuota
    }
}