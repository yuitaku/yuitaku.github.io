function loadXMLDoc(dname)
{
  var xhttp;
if (window.XMLHttpRequest)
{
xhttp=new XMLHttpRequest();
}
else
{
xhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xhttp.onreadystatechange = function(){
  if(xhttp.readyState==4&&xhttp.status==200){
    var cc = xhttp.responseXML;
  }
}
xhttp.open("GET",dname,true);
xhttp.send();
return cc;
}
