const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const bot = new Telegraf(API SECRET KEY)
bot.start((ctx) => ctx.reply('Happy BirthDay!!'))
bot.command('bin',(ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('Thank you', (ctx) => ctx.reply('Shh!'))
bot.launch()

/**
 * How to get the secret token for creating a bot ?
 * -> Open Telegram and search for BotFather 
 * -> To read instruction type /start and press enter
 * -> to create a new bot type /newbot and presss enter
 * -> It will ask for a bot name, give a bot name without a / , ex: coding_bot
 * -> then it will ask for a username ending with bot, ex: code_exmaples_js_cpp_bot
 * // t.me/code_exmaples_js_cpp_bot
 */
