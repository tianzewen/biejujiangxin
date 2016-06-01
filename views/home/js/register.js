$(function (){
	var csrfToken = getCsrf();
	$("input[name='_csrf']").val(csrfToken);
})
function useRegisterSub(){
	var formData = new FormData($("form[name='useRegisterForm']")[0]);
	console.log(formData);
	$.ajax({
      type:"post",
	  url:"http://biejujiangxin.cn/web/user/register",
	  data:"_csrf=Z1hqNVBLVVgoFjpBIXtsDQ4UWVYILSYZKhoFR2kxHhsVEj9ANgE.MQ==",
	  async:false,
      success:function(data){
		  alert(data);
	  },
	  error:function(error){
	  }
    });
}