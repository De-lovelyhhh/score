Page({
    data: {
        flag:true,
        classid:'',
        stuid:'',
        returnNumber:''
    },
    number1: function (ee) {
        this.setData({classid : ee.detail.value});
    },
    id: function (ee) {
        this.setData({stuid: ee.detail.value});
    },
  //处理事件函数
    sure: function(){
        var that=this;

        wx.request({
            url: 'http://www.csnoob.cn/api',
            data:{
                cid:this.data.classid,
                sid:this.data.stuid
            },
            header: {//请求头
                'Content-Type': 'applciation/json'
            },
            method: 'GET',
            success: function(res){
                that.setData({
                    returnNumber: res.data.data.score,
                    flag:false
                })
            }
        })

    }
})