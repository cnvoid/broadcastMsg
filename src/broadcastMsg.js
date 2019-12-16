/**
 * Created by stevenzhu on 2016/5/3/003, Guangzhou, China
 * MailTo:cnvoid@126.com
 */
export default (function(root, factory) {
    'use strict';
    var define = window.define
    return  typeof define === 'function'? define('broadCastMsg', factory) : factory();

}(this, function() {
    'use strict';
    return {
        msgList: [],
        /**
         * emitter a message(发射广播)
         * @param msg 消息内容
         * @param data 推送数据
         */
        emit: function (msg, data) {
            if (!msg) {
                return false;
            }
            var allMsg = this.msgList[msg] || [];
            for (var i = 0; i < allMsg.length; i++) {
                allMsg[i](data, msg);
            }
        },
        /**
         * receive a message(订阅广播消息)
         * @param msg 广播消息
         * @param cb 回调
         */
        receive: function (msg, cb) {
            this.msgList[msg] = this.msgList[msg] || [];
            cb = typeof cb == 'function' ? cb : function () {
            };
            for (var i = 0; i < this.msgList[msg].length; i++) {
                if (cb + '' == this.msgList[msg][i] + '') {
                    return false;
                }
            }
            this.msgList[msg].push(cb);
        }
    };
}));

