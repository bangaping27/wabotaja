let handler = async (m, { conn }) => {
  global.DATABASE._data.chats[m.chat].isBanned = false
  m.reply('Done!')
}
handler.help = ['unbanchat']
handler.tags = ['mods']
handler.command = /^unbanchat$/i
handler.mods = true

module.exports = handler
