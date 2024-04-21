/*

const TelegramBot = require('node-telegram-bot-api');
const { Response } = require('undici-types');
const { MessageChannel } = require('worker_threads');

// Reemplaza el siguiente valor con el token de tu bot
const token = '6550716112:AAHH8dQfGA-jA_q3G7Pu6969O6Ev5H_pP9g';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
 const chatId = msg.chat.id;
 const resp = '¡Gracias Amo al fin estoy vivo @RufasT';
 bot.sendMessage(chatId, resp);
});

bot.onText(/\/ayuda/, (msg) => {
 const chatId = msg.chat.id;
 const resp = '¡Hola! Estas son las funciones que puedo realizar:\n\n' +
               '/start - Iniciar el bot\n' +
               '/ayuda - Mostrar este mensaje de ayuda\n' +
               '/echo [texto] - Repetir el texto ingresado\n' +
               '/saludo - Saludar al usuario\n' +
               '/adios - Despedir al usuario'
               '/ip - gddgs';
 bot.sendMessage(chatId, resp);
});

bot.onText(/\/echo (.+)/, (msg, match) => {
 const chatId = msg.chat.id;
 const resp = match[1];
 bot.sendMessage(chatId, resp);
});

bot.onText(/\/saludo/, (msg) => {
 const chatId = msg.chat.id;
 const user = msg.from.first_name;
 const resp = '¡Hola ' + user + '!';
 bot.sendMessage(chatId, resp);
});

bot.onText(/\/adios/, (msg) => {
    const chatId = msg.chat.id;
    const user = msg.from.first_name;
    const resp = '¡Adiós ' + user + '!';
    bot.sendMessage(chatId, resp);
});

bot.onText(/\/IP/, (MessageChannel) =>{
    const chatId = MessageChannel.chat.id;
    const user = MessageChannel.from.first_name;
    const resp = 'Hola pequeñito quieres saber tu ip? pues ponlo!!' + user + '';
    bot.sendMessage(chatId, Response);
});
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

const TelegramBot = require('node-telegram-bot-api');
const path = require('path');
const modulePath = path.resolve(__dirname, 'node_modules');
console.log('La ruta a la carpeta node_modules es:', modulePath);

const token = '6550716112:AAHH8dQfGA-jA_q3G7Pu6969O6Ev5H_pP9g';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/hola/, (msg) => {
    const chatId = msg.chat.id;
    const resp = '¡Hola!';
    bot.sendMessage(chatId, resp);
});

bot.onText(/\/adios/, (msg) => {
    const chatId = msg.chat.id;
    const resp = '¡Adiós!';
    bot.sendMessage(chatId, resp);
});

bot.onText(/\/ipinfo (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const ipAddress = match[1];

    if (!isValidIp(ipAddress)) {
        bot.sendMessage(chatId, 'La dirección IP ingresada no es válida.');
        return;
    }

    try {
        const ipInfo = await getIpInfo(ipAddress);
        const message = `*Información de la IP:*
*Dirección IP:* ${ipInfo.query}
*País:* ${ipInfo.country} (${ipInfo.countryCode})
*Continente:* ${ipInfo.continent} (${ipInfo.continentCode})
*Región:* ${ipInfo.regionName}
*Ciudad:* ${ipInfo.city}
*Código postal:* ${ipInfo.zip}
*Latitud:* ${ipInfo.lat}
*Longitud:* ${ipInfo.lon}
*Zona horaria:* ${ipInfo.timezone}
*Desplazamiento horario:* ${ipInfo.offset}
*Moneda:* ${ipInfo.currency}
*ISP:* ${ipInfo.isp}
*Organización:* ${ipInfo.org}
*AS:* ${ipInfo.as}
*Nombre de AS:* ${ipInfo.asname}
*Móvil:* ${ipInfo.mobile}
*Proxy:* ${ipInfo.proxy}
*Hosting:* ${ipInfo.hosting}`;
        bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
    } catch (error) {

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
const TelegramBot = require('node-telegram-bot-api');
const request = require('request-promise');

const token = '6550716112:AAHH8dQfGA-jA_q3G7Pu6969O6Ev5H_pP9g';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/ipinfo (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const ipAddress = match[1];

    if (!isValidIp(ipAddress)) {
        bot.sendMessage(chatId, 'La dirección IP ingresada no es válida.');
        return;
    }

    try {
        const ipInfo = await getIpInfo(ipAddress);
        const message = `*Información de la IP:*
*Dirección IP:* ${ipInfo.ip}
*País:* ${ipInfo.country_name} (${ipInfo.country_code})
*Región:* ${ipInfo.region}
*Ciudad:* ${ipInfo.city}
*Zona horaria:* ${ipInfo.timezone}
*Latitud:* ${ipInfo.latitude}
*Longitud:* ${ipInfo.longitude}
*Nombre de AS:* ${ipInfo.org}`;
        bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
    } catch (error) {
        bot.sendMessage(chatId, 'No se pudo obtener la información de la dirección IP.');
    }
});

function isValidIp(ip) {
    const ipFormat = new RegExp('^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$');
    return ipFormat.test(ip);
}

async function getIpInfo(ipAddress = '') {
    const response = await request({
        uri: `https://ipapi.co/${ipAddress}/json/`,
        headers: {
            'Content-Type': 'application/json',
        },
        json: true,
    });
    return response;
}*/


/*

const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
const bot = new TelegramBot('6550716112:AAHH8dQfGA-jA_q3G7Pu6969O6Ev5H_pP9g', {polling: true});

bot.onText(/\/ip (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const ipAddress = match[1];
    try {
        const response = await axios.get(`https://ipapi.co/${ipAddress}/json/`);
        const data = response.data;
        const info = `IP: ${data.ip}
Region: ${data.region}
City: ${data.city}
Postal Code: ${data.postal}
Timezone: ${data.timezone}
ASN: ${data.org}`;
        bot.sendMessage(chatId, info);
    } catch (error) {
        console.error('Error al obtener la información de la IP:', error);
        bot.sendMessage(chatId, 'Lo siento, no pude obtener la información de la IP.');
    }
});*/




const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
const { debug } = require('request-promise');
const bot = new TelegramBot('6550716112:AAHH8dQfGA-jA_q3G7Pu6969O6Ev5H_pP9g', {polling: true});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const resp = '¡Gracias por levantarme al fin estoy vivo mi gran Amo' + msg.chat.user;
        bot.sendMessage(chatId, resp);
});

    bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    const resp = '¡Hola! Estas son las funciones que puedo realizar si deseas algunas cosas mas comunicate con @RufasT:\n\n' +
                  '/start - Iniciar el bot\n' +
                  '/ayuda - Mostrar este mensaje de Ayuda y sugerencias :)\n' +
                  '/echo [texto] - Repetir el texto ingresado\n' +
                  '/saludo - Saludar al usuario\n' +
                  '/ip - Pon la Ip que desees para sacar información';
    bot.sendMessage(chatId, resp);
   });





bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];
    bot.sendMessage(chatId, resp);
   });

bot.onText(/\/saludo/, (msg) => {
 const chatId = msg.chat.id;
 const user = msg.from.first_name;
 const resp = '¡Hola ' + user + '!';
 bot.sendMessage(chatId, resp);
});

bot.onText(/\/adios/, (msg) => {
    const chatId = msg.chat.id;
    const user = msg.from.first_name;
    const resp = '¡Adiós ' + user + '!';
    bot.sendMessage(chatId, resp);

});


bot.onText(/\/num (\d+)/ , async (msg, match) => {
    const phoneNumber = match[1];
    const apiKey = 'WsCmcnkzhPHafHGyjQZxyvYxHCkMpQaC';

    try {
        const response = await axios.get(`https://api.apilayer.com/number_verification/validate`, {
            params: {
                number: phoneNumber
            },
            headers: {
                'apikey': apiKey
            }
        });
        const data = response.data;
        const info = 
        
        
        `◈════════════◈════════════◈
                           えTняяTえ     
◈════════════◈════════════◈\n` +
            `Información del número de teléfono ${phoneNumber}:\n\n` +
            `▶País: ${data.country_name}\n` +
            `▶Formato local: ${data.country_code_iso3}\n` +
            `▶Formato internacional: ${data.international_format}\n` +
            `▶Prefijo: ${data.country_prefix}\n` +
            `▶Código de país: ${data.country_code}\n` +
            `▶Proveedor: ${data.carrier}\n` +
            `▶Tipo de línea: ${data.line_type}\n`+
            `▶Ubicación: ${data.location.latitude}\n`+

            `◈════════════◈════════════◈
                    Creador: @RufasT
                    Team えTняяTえ
◈════════════◈════════════◈`

        bot.sendMessage(msg.chat.id, info);
    } catch (error) {
        console.error('Error al obtener información del número de teléfono:', error);
        bot.sendMessage(msg.chat.id, 'Lo siento, no se pudo obtener información del número de teléfono.');
    }
});




bot.onText(/\/ip (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const ipAddress = match[1];
    try {
        const response = await axios.get(`https://ipapi.co/${ipAddress}/json/`);
        const data = response.data;
        const info = `IP: ${data.ip}
        
◈════════════◈════════════◈
                            えTняяTえ     
◈════════════◈════════════◈
▶ IP : ${data.ip}
▶ PAIS: ${data.country_name}
▶ Region: ${data.region}
▶ Ciudad: ${data.city}
▶ Codigo de Cell: ${data.country_calling_code}
▶ Postal Code: ${data.country_code_iso3}
▶ Latitude: ${data.latitude}
▶ Longitude: ${data.longitude}
▶ Timezone: ${data.timezone}
▶ DST Offset: ${data.utc_offset}
▶ Moneda: ${data.currency_name}
▶ Org: ${data.org}
▶ ASN: ${data.asn}
▶ Mobile: ${data.mobile}
▶ Proxy: ${data.proxy}
▶ Name AS: ${data.hostname}
◈════════════◈════════════◈
Creador: @RufasT
Team えTняяTえ 
◈════════════◈════════════◈`;

        bot.sendMessage(chatId, info);
    } catch (error) {
        console.error('Error al obtener la información de la IP:', error);
        bot.sendMessage(chatId, 'Lo siento, no pude obtener la información de la IP.');
    }
});




