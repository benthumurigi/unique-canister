"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMessage = exports.updateMessage = exports.addMessage = exports.getMessage = exports.getMessages = void 0;
const azle_1 = require("azle");
const uuid_1 = require("uuid");
const messageStorage = new azle_1.StableBTreeMap(0, 44, 1024);
azle_1.query;
function getMessages() {
    return azle_1.Result.Ok(messageStorage.values());
}
exports.getMessages = getMessages;
azle_1.query;
function getMessage(id) {
    return (0, azle_1.match)(messageStorage.get(id), {
        Some: (message) => azle_1.Result.Ok(message),
        None: () => azle_1.Result.Err(`a message with id=${id} not found`)
    });
}
exports.getMessage = getMessage;
azle_1.update;
function addMessage(payload) {
    const message = { id: (0, uuid_1.v4)(), createdAt: azle_1.ic.time(), updatedAt: azle_1.Opt.None, ...payload };
    messageStorage.insert(message.id, message);
    return azle_1.Result.Ok(message);
}
exports.addMessage = addMessage;
azle_1.update;
function updateMessage(id, payload) {
    return (0, azle_1.match)(messageStorage.get(id), {
        Some: (message) => {
            const updatedMessage = { ...message, ...payload, updatedAt: azle_1.Opt.Some(azle_1.ic.time()) };
            messageStorage.insert(message.id, updatedMessage);
            return azle_1.Result.Ok(updatedMessage);
        },
        None: () => azle_1.Result.Err(`couldn't update a message with id=${id}. message not found`)
    });
}
exports.updateMessage = updateMessage;
azle_1.update;
function deleteMessage(id) {
    return (0, azle_1.match)(messageStorage.remove(id), {
        Some: (deletedMessage) => azle_1.Result.Ok(deletedMessage),
        None: () => azle_1.Result.Err(`couldn't delete a message with id=${id}. message not found.`)
    });
}
exports.deleteMessage = deleteMessage;
// a workaround to make the uuid package work with Azle
globalThis.crypto = {
    // @ts-ignore
    getRandomValues: () => {
        let array = new Uint8Array(32);
        for (let i = 0; i < array.length; i++) {
            array[i] = Math.floor(Math.random() * 256);
        }
        return array;
    }
};
