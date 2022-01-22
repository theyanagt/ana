let handler = async m => m.reply(`
*DONATE*
 Gopay : 08884357769
 Dana : 08884357769
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler