function change_title(){
  if(window.location.href.indexOf("bithumb.com/trade/order") > -1) {
    setInterval(function(){
      var para = document.location.href.split("/");
    
      document.title = para[5].split("_")[0].toUpperCase()+ " " + document.getElementById('assetReal'+para[5]).innerHTML }, 1000
    );
  }
}
window.onload = change_title();