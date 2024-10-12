function ScreenWidth(){
    if
    (/phone|pad|pod|iPhone|iPod|ios|iPad|Android|Fennec|BlackBerry|Mobile|IEMobile|MQQBrowser|JUC|Fennec|WosBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i
        .test(navigator.userAgent)) {
            window.location.href = 'phone.html';
        }else{
            window.location.href = 'Computer.html';
        }
}window.onload = function(){
    setTimeout(ScreenWidth,2000); 
    }

/*
    function ScreenWidth(){
    if
    (/phone|pad|pod|iPhone|iPod|ios|iPad|Android|Fennec|BlackBerry|Mobile|IEMobile|MQQBrowser|JUC|Fennec|WosBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i
        .test(navigator.userAgent)) {
            window.location.href = 'pone.html';
        }else{
            window.location.href = 'window.html';
        }
}window.onload = function(){
    ScreenWidth() 
    }
*/