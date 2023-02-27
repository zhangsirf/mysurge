/*
WPS Office 解锁部分功能
***************************
QuantumultX:
[rewrite_local]
^https?:\/\/account\.wps\.cn\/api\/users url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Wps.js
[mitm]
hostname = account.wps.cn
**************************/

// var body = JSON.parse($response.body);
// var obj = {
//   exp: 0,
//   level: 3,
//   privilege: [
//     { spid: "data_recover", times: 0, expire_time: 4102415999 },
//     { spid: "ocr", times: 0, expire_time: 4102415999 },
//     { spid: "pdf2doc", times: 0, expire_time: 4102415999 },
//     { spid: "pdf_merge", times: 0, expire_time: 4102415999 },
//     { spid: "pdf_sign", times: 0, expire_time: 4102415999 },
//     { spid: "pdf_split", times: 0, expire_time: 4102415999 }
//   ],
//   result: "ok",
//   total_buy: 0,
//   total_cost: -30,
//   userid: body.userid,
//   vip: {
//     name: "超级会员",
//     has_ad: 0,
//     memberid: 40,
//     expire_time: 4102415999,
//     enabled: [
//       { memberid: 40, name: "超级会员", expire_time: 4102415999 },
//       { memberid: 20, name: "WPS会员", expire_time: 4102415999 },
//       { memberid: 12, name: "稻壳会员", expire_time: 4102415999 }
//     ]
//   },
//   wealth: 0,
//   expire_time: 4102415999
// };
//
// $done({ body: JSON.stringify(obj) });
var a='{\x22result\x22:\x22ok\x22,\x22privilege\x22:[],\x22total_cost\x22:0,\x22level\x22:88,\x22wealth\x22:0,\x22exp\x22:0,\x22vip\x22:{\x22has_ad\x22:0,\x22enabled\x22:[]},\x22total_buy\x22:0}';var b=JSON['parse'](a);const c=new Array('data_recover','ocr','pdf2doc','pdf_merge','pdf_sign','pdf_split');const d=new Array(['超级会员',0x28],['WPS会员',0x14],['稻壳会员',0xc]);const e=0x70db6800;b['server_time']=e;b['userid']=e;b['vip']['name']=d[0x0][0x0];b['vip']['memberid']=d[0x0][0x1];b['vip']['expire_time']=e;for(i=0x0;i<c['length'];i++){b['privilege'][i]={'times':0x0,'expire_time':e,'spid':c[i]};}for(o=0x0;o<d['length'];o++){b['vip']['enabled'][o]={'name':d[o][0x0],'expire_time':e,'memberid':d[o][0x1]};}console['log']('\x0aR·E\x20WPS\x20Script\x20Log:\x0aWPS已解锁到2030年\x0a😎可享受'+c['length']+'+项会员服务');$done({body : JSON['stringify'](b)});
