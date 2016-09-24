var xmlhttp;
var xmldoc;
var x;

function loadXML(url){
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
	}else{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			xmldoc = xmlhttp.responseXML;
			x = xmldoc.getElementsByTagName("article");
			loadTextIndex(x);
		}
			}
	xmlhttp.open("GET",url,true);
	xmlhttp.send();


}

function loadTextIndex(x){
	 var container = document.getElementById("container");
	 var ul = document.createElement("ul");
	 container.appendChild(ul);
	 for(var i =0;i<x.length;i++){
	 	var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
	 	var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
	 	var date = x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue;
	 	var img = x[i].getElementsByTagName("img")[0].childNodes[0].nodeValue;	 	
	 	var content = x[i].getElementsByTagName("content")[0].childNodes[0].nodeValue;
	 	

	 	//建立元素
	 	
	 	var li = document.createElement("li");
	 	var h2 =document.createElement("h2");
	 	var a = document.createElement("a");
	 	a.href="#";
	 	var a_node = document.createTextNode(title);
	 	a.appendChild(a_node);
	 	var my_img = document.createElement("img");
	 	my_img.src=img;
	 	var my_date = document.createElement("span");
	 	var date_node = document.createTextNode(date);
	 	my_date.appendChild(date_node);
	 	var my_author = document.createElement("span");
	 	var author_node = document.createTextNode(author);
	 	var my_div = document.createElement("div");
	 	my_div.className="coco";
	 	
	 		 		 	
	 	ul.appendChild(li);
	 	li.appendChild(h2);
	 	h2.appendChild(a);
	 	li.appendChild(my_img);
	 	li.appendChild(my_date);
	 	li.appendChild(my_author);
	 	my_author.appendChild(author_node);
	 	li.appendChild(my_div);
	 	

	 	

	 	loadXMLDoc(content,i);

	 }
	
}


 


 function loadXMLDoc(url,i)
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementsByClassName("coco")[i].innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET",url,true);
xmlhttp.send();
}
