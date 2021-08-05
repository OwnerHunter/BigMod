const { botCache } = require('../structures/cache')

module.exports = async function(client, interaction) {
    if (!interaction.isCommand()) return;

    if (botCache.commands.has(interaction.commandName)) {
        botCache.commands.get(interaction.commandName).exec(client, interaction)
    }
}