const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const bot = new Telegraf("6844935859:AAFMvyyyyIAVsfqw-EAF0nXHSlCGjPFIZCk")
bot.start((ctx) => ctx.reply('Happy BirthDay!!'))
bot.command('bin',(ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('Thank you', (ctx) => ctx.reply('Shh!'))
bot.launch()
