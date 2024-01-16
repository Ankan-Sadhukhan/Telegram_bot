const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const bot = new Telegraf(API SECRET KEY)
bot.start((ctx) => ctx.reply('Happy BirthDay!!'))
bot.command('bin',(ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('Thank you', (ctx) => ctx.reply('Shh!'))
bot.launch()
