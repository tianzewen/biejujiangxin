$(function (){
	var csrfToken = getCsrf();
	$("input[name='_csrf']").val(csrfToken);
})
function useRegisterSub(){
	var formData = new FormData(document.getElementById("useRegisterForm"));
	//console.log(formData);
	$.ajax({
      type:"post",
	  url:"http://biejujiangxin.cn/web/user/register",
	  data:formData,
	  processData:false,// 告诉jQuery不要去处理发送的数据
	  contentType:false,// 告诉jQuery不要去设置Content-Type请求头
	  async:false,
      success:function(data){
		  alert(data);
	  },
	  error:function(error){
	  }
    });
}