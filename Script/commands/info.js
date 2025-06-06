module.exports.config = {
 name: "info",
 version: "1.2.6",
 hasPermssion: 0,
 credits: "Shaon Ahmed",
 description: "info bot owner",
 commandCategory: "For users",
 hide:true,
 usages: "",
 cooldowns: 5,
};


module.exports.run = async function ({ api, event, args, Users, permssion, getText ,Threads}) {
 const content = args.slice(1, args.length);
 const { threadID, messageID, mentions } = event;
 const { configPath } = global.client;
 const { ADMINBOT } = global.config;
 const { NDH } = global.config;
 const { userName } = global.data;
 const request = global.nodemodule["request"];
 const fs = global.nodemodule["fs-extra"];
 const { writeFileSync } = global.nodemodule["fs-extra"];
 const mention = Object.keys(mentions);
 delete require.cache[require.resolve(configPath)];
 var config = require(configPath);
 const listAdmin = ADMINBOT || config.ADMINBOT || [];
 const listNDH = NDH || config.NDH || [];
 {
 const PREFIX = config.PREFIX;
 const namebot = config.BOTNAME;
 const { commands } = global.client;
 const threadSetting = (await Threads.getData(String(event.threadID))).data || 
 {};
 const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
 : global.config.PREFIX;
 const dateNow = Date.now();
 const time = process.uptime(),
 hours = Math.floor(time / (60 * 60)),
 minutes = Math.floor((time % (60 * 60)) / 60),
 seconds = Math.floor(time % 60);
 const data = [
 "Bạn không thể tìm được lệnh admin tại 'help' của MintBot",
 "Đừng mong chờ gì từ MintBot.",
 "Cái đoạn này á? Của SpermBot.",
 "Nếu muốn không lỗi lệnh thì hãy xài những lệnh có trong help vì những lệnh lỗi đã bị ẩn rồi.",
 "Đây là một con bot được các coder của MiraiProject nhúng tay vào.",
 "Muốn biết sinh nhật của Mint thì hãy xài 'birthday'.",
 "Cặc.",
 "Cút.",
 "Lồn.",
 "Bạn chưa biết.",
 "Bạn đã biết.",
 "Bạn sẽ biết.",
 "Không có gì là hoàn hảo, MintBot là ví dụ.",
 "Mirai dropped.",
 "MintBot là MiraiProject nhưng module là idea của SpermBot.",
 "Bạn không biết cách sử dụng MintBot? Đừng dùng nữa.",
 "Muốn chơi game? Qua bot khác mà chơi đây không rảnh",
 "MintBot có thể hiểu phụ nữ nhưng không thể có được họ.",
 "MintBot cân spam nhưng không có gì đáng để bạn spam."
 ];
 var link = [
 "https://lh3.googleusercontent.com/p/AF1QipNBfSbPHAs4waHAvgG3K-v75Pc97VMTZbWchXyP=s1348-w766-h1348-rw",
 "https://i.imgur.com/WXQIgMz.jpeg",
 "https://i.postimg.cc/QdgH08j6/Messenger-creation-C2-A39-DCF-A8-E7-4-FC7-8715-2559476-FEEF4.gif",
 "https://i.imgur.com/WXQIgMz.jpeg",
 "https://i.imgur.com/WXQIgMz.jpeg",
 ];

 var i = 1;
 var msg = [];
 const moment = require("moment-timezone");
 const date = moment.tz("Asia/Dhaka").format("hh:mm:ss");
 for (const idAdmin of listAdmin) {
 if (parseInt(idAdmin)) {
 const name = await Users.getNameUser(idAdmin);
 msg.push(`${i++}/ ${name} - ${idAdmin}`);
 }
 }
 var msg1 = [];
 for (const idNDH of listNDH) {
 if (parseInt(idNDH)) {
 const name1 = (await Users.getData(idNDH)).name
 msg1.push(`${i++}/ ${name1} - ${idNDH}`);
 }
 }
 var callback = () => 
 api.sendMessage({ body: `====「 ${namebot} 」====\n» Prefix system: ${PREFIX}\n» Prefix box: ${prefix}\n» Modules: ${commands.size}\n» Ping: ${Date.now() - dateNow}ms\n──────────────\n======「 ADMIN 」 ======\n${msg.join("\n")}\n──────────────\nBot has been working for ${hours} hour(s) ${minutes} minute(s) ${seconds} second(s)\n\n» Total users: ${global.data.allUserID.length} \n» Total threads: ${global.data.allThreadID.length}\n──────────────\n[thanks for using bot!!]`, attachment: fs.createReadStream(__dirname + "/cache/kensu.jpg"), }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/kensu.jpg"));
 return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/kensu.jpg")).on("close", () => callback()); 
 }
}/**
 * @author Shaon Ahmed
 * @warn Do not edit code or edit credits
 */

module.exports.config = {
 name: "info",
 version: "1.2.6",
 hasPermssion: 0,
 credits: "Himel Bhuiyan",
 description: "🥰আসসালামু আলাইকুম 🥰",
 commandCategory: "For users",
 hide:true,
 usages: "",
 cooldowns: 5,
};


module.exports.run = async function ({ api, event, args, Users, permssion, getText ,Threads}) {
 const content = args.slice(1, args.length);
 const { threadID, messageID, mentions } = event;
 const { configPath } = global.client;
 const { ADMINBOT } = global.config;
 const { NDH } = global.config;
 const { userName } = global.data;
 const request = global.nodemodule["request"];
 const fs = global.nodemodule["fs-extra"];
 const { writeFileSync } = global.nodemodule["fs-extra"];
 const mention = Object.keys(mentions);
 delete require.cache[require.resolve(configPath)];
 var config = require(configPath);
 const listAdmin = ADMINBOT || config.ADMINBOT || [];
 const listNDH = NDH || config.NDH || [];
 {
 const PREFIX = config.PREFIX;
 const namebot = config.BOTNAME;
 const { commands } = global.client;
 const threadSetting = (await Threads.getData(String(event.threadID))).data || 
 {};
 const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
 : global.config.PREFIX;
 const dateNow = Date.now();
 const time = process.uptime(),
 hours = Math.floor(time / (60 * 60)),
 minutes = Math.floor((time % (60 * 60)) / 60),
 seconds = Math.floor(time % 60);
 const data = [
 "Bạn không thể tìm được lệnh admin tại 'help' của MintBot",
 "Đừng mong chờ gì từ MintBot.",
 "Cái đoạn này á? Của SpermBot.",
 "Nếu muốn không lỗi lệnh thì hãy xài những lệnh có trong help vì những lệnh lỗi đã bị ẩn rồi.",
 "Đây là một con bot được các coder của MiraiProject nhúng tay vào.",
 "Muốn biết sinh nhật của Mint thì hãy xài 'birthday'.",
 "Cặc.",
 "Cút.",
 "Lồn.",
 "Bạn chưa biết.",
 "Bạn đã biết.",
 "Bạn sẽ biết.",
 "Không có gì là hoàn hảo, MintBot là ví dụ.",
 "Mirai dropped.",
 "MintBot là MiraiProject nhưng module là idea của SpermBot.",
 "Bạn không biết cách sử dụng MintBot? Đừng dùng nữa.",
 "Muốn chơi game? Qua bot khác mà chơi đây không rảnh",
 "MintBot có thể hiểu phụ nữ nhưng không thể có được họ.",
 "MintBot cân spam nhưng không có gì đáng để bạn spam."
 ];
 var link = [
 "https://lh3.googleusercontent.com/p/AF1QipNBfSbPHAs4waHAvgG3K-v75Pc97VMTZbWchXyP=s1348-w766-h1348-rw",
 "https://lh3.googleusercontent.com/p/AF1QipNKgNobgkZcRjjH3k3pTaUgBnlaWCv2SYil4obg=s1348-w766-h1348-rw",
 "https://lh3.googleusercontent.com/p/AF1QipPwdQ-ZKsjq3VYuUT4MK73QVw8hx9GMyiZ-bZFg=s1348-w766-h1348-rw",
 "https://lh3.googleusercontent.com/p/AF1QipP5f4-bG6eZPYMqZMPaQGIRgCFXSyzmymjq1A83=s1348-w766-h1348-rw",
 "https://www.bangla-kobita.com/images/up/1/pp37142-AUX.jpg",

 ]; 
 var i = 1;
 var msg = [];
 const moment = require("moment-timezone");
 const date = moment.tz("Asia/Dhaka").format("hh:mm:ss");
 for (const idAdmin of listAdmin) {
 if (parseInt(idAdmin)) {
 const name = await Users.getNameUser(idAdmin);
 msg.push(`${i++}/ ${name} - ${idAdmin}`);
 }
 }
 var msg1 = [];
 for (const idNDH of listNDH) {
 if (parseInt(idNDH)) {
 const name1 = (await Users.getData(idNDH)).name
 msg1.push(`${i++}/ ${name1} - ${idNDH}`);
 }
 }
 var callback = () => 
 api.sendMessage({ body: 
 ` 
┏━━━━━━━━━━━━━━━━━━━━━┓
┃				🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 𝐍𝐚𝐦𝐞	: Himel Bhuiyan 
┃ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫	: Male
┃ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧	: single 
┃ 🎂 𝐀𝐠𝐞	: 24
┃ ⚠️ 𝐀𝐛𝐨𝐮𝐭	: search my name on Google 
┃ 🏫 𝐄𝐝𝐮	: Honors
┃ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬	:Dhaka Bangladesh 
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🎭 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩	:me/+8801972224417
┃ 📢 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦	: me/+8801972224417
┃ 🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤	: https://www.facebook.com/ntojkuangsyamrmyi.721185
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞:  ${time}
┗━━━━━━━━━━━━━━━━━━━━━┛
 \n\n----↓↓𝙍𝙤𝙗𝙤𝙩 𝙖𝙘𝙩𝙞𝙫𝙚 𝙩𝙞𝙢𝙚↓↓----\n\n ${hours} : ${minutes} : ${seconds} second(s)\n\n______________________________\n» 𝗧𝗢𝗧𝗔𝗟 𝗨𝗦𝗘𝗥𝗦: ${global.data.allUserID.length} \n\n» 𝗧𝗢𝗧𝗔𝗟 𝗚𝗥𝗢𝗨𝗣: ${global.data.allThreadID.length}\n______________________________\n\n thanks for using \n  𝐒𝐡𝐢𝐏𝐮 𝐀𝐢 🤖💨
\n--------------------------------------------------\n\n☢️☣️⚠️`, attachment: fs.createReadStream(__dirname + "/cache/kensu.jpg"), }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/kensu.jpg"));
 return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/kensu.jpg")).on("close", () => callback()); 
 }
}
