// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db=cloud.database()
const a=db.command

// 云函数入口函数
exports.main = async (event, context) => {
    var id=event.id;
    return await db.collection("law").doc(id).update({
        data: {
            hits:a.inc(1)
        },
    })
}