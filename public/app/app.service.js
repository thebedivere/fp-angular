export function AppService() {
    /**
     * @param {string} message message to return
     */
    this.thing = function(message) {
        return message
    }
}

export let __hotReload = true