function getCsrf(){
	var scrfToken = "";
	$.ajax({
		type:"get",
		url:"http://biejujiangxin.cn/web/home/csrf",
	    async:false,
        success:function(data){
	  	    scrfToken = data;
	    }
	});
	return scrfToken;
}