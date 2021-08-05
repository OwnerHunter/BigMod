const { botCache } = require('../structures/cache')

botCache.commands.set('ping', {
    desc: 'Receive a pong message.',
    exec: async function (client, interaction) {
        await interaction.reply('Pong!')
    }
})