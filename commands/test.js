const {
    botCache
} = require('../structures/cache')

botCache.commands.set('test', {
    desc: 'This is just a testing command',
    exec: async function(client, interaction) {
        await interaction.reply(`This bot is currently undergoing testing`)
    }
})