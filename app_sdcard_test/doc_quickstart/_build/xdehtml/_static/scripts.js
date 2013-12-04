var allHTMLTags=document.getElementsByTagName("*");var cmdOptionsToggle=0;var readMoreToggle=0;function pageSearch(a){var b=0;if(a==""){return false}if(!window.find(a)){while(window.find(a,false,true)){b++}}else{b++}if(b==0){alert("Not found.")}return false}function toggleElement(c,b){switch(b){case"class":for(i=0;i<allHTMLTags.length;i++){if(allHTMLTags[i].className==c){if(allHTMLTags[i].style.display=="none"){allHTMLTags[i].style.display="block"}else{allHTMLTags[i].style.display="none"}}}break;case"id":if(document.getElementById(c).style.display=="none"){document.getElementById(c).style.display="block"}else{document.getElementById(c).style.display="none"}break;case"name":var a=document.getElementsByName(c);for(i=0;i<a.length;i++){if(a[i].style.display=="none"){a[i].style.display="block"}else{a[i].style.display="none"}}break;default:if(c.style.display=="none"){c.style.display="block"}else{c.style.display="none"}}return false}function hideElements(c,b){switch(b){case"class":for(i=0;i<allHTMLTags.length;i++){if(allHTMLTags[i].className==c){allHTMLTags[i].style.display="none"}}break;case"id":document.getElementById(c).style.display="none";break;case"name":var a=document.getElementsByName(c);for(i=0;i<a.length;i++){a[i].style.display="none"}break;default:c.style.display="none"}return false}function toggleCmdOptions(){for(i=0;i<allHTMLTags.length;i++){if(allHTMLTags[i].className=="cmd-only"){if(cmdOptionsToggle==0){allHTMLTags[i].style.display="block"}else{allHTMLTags[i].style.display="none"}}else{if(allHTMLTags[i].className=="cmd-toggle"){if(cmdOptionsToggle==0){allHTMLTags[i].innerHTML="Hide non-XDE options"}else{allHTMLTags[i].innerHTML="Show Non-XDE Options"}}}}cmdOptionsToggle=!cmdOptionsToggle;return true}function ToggleReadMore(){for(i=0;i<allHTMLTags.length;i++){if(allHTMLTags[i].className=="readmore-toggle"){if(readMoreToggle==0){allHTMLTags[i].style.display="block"}else{allHTMLTags[i].style.display="none"}}else{if(allHTMLTags[i].className=="readmore"){if(readMoreToggle==0){allHTMLTags[i].style.display="none"}else{allHTMLTags[i].style.display="block"}}}}readMoreToggle=!readMoreToggle;return true}function insertTips(){for(i=0;i<allHTMLTags.length;i++){switch(allHTMLTags[i].className){case"toolsoutput":allHTMLTags[i].innerHTML='<span class="toolsoutput-before">tools output:<br /> </span>'+allHTMLTags[i].innerHTML;break;case"note":allHTMLTags[i].innerHTML='<span class="note-before">note </span>'+allHTMLTags[i].innerHTML;break;case"info":allHTMLTags[i].innerHTML='<span class="info-before">tip </span>'+allHTMLTags[i].innerHTML;break;case"danger":allHTMLTags[i].innerHTML='<span class="danger-before">caution </span>'+allHTMLTags[i].innerHTML;break;case"newinxc":allHTMLTags[i].innerHTML='<span class="newinxc-before">New in XC </span>'+allHTMLTags[i].innerHTML;break;case"warning":allHTMLTags[i].innerHTML='<span class="warning-before">warning </span>'+allHTMLTags[i].innerHTML;break;case"topofpage":allHTMLTags[i].innerHTML='<span class="topofpage-before"><img src="images/topofpage.gif" alt="" />: </span>'+allHTMLTags[i].innerHTML;break;case"codeoptions":allHTMLTags[i].innerHTML='<span class="codeoptions-before">CODE: </span>'+allHTMLTags[i].innerHTML;break;default:}}return false}function getInternetExplorerVersion(){var c=-1;if(navigator.appName=="Microsoft Internet Explorer"){var a=navigator.userAgent;var b=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");if(b.exec(a)!=null){c=parseFloat(RegExp.$1)}}return c}function toggleContentsElement(c,b){switch(b){case"class":for(i=0;i<allHTMLTags.length;i++){if(allHTMLTags[i].className==c){if(allHTMLTags[i].style.display=="none"){allHTMLTags[i].style.display="block"}else{allHTMLTags[i].style.display="none"}}}break;case"id":if(document.getElementById("contentsFrame").contentDocument.getElementById(c).style.display=="none"){document.getElementById("contentsFrame").contentDocument.getElementById(c).style.display="block"}else{document.getElementById("contentsFrame").contentDocument.getElementById(c).style.display="none"}break;case"name":var a=document.getElementById("contentsFrame").contentDocument.getElementsByName(c);for(i=0;i<a.length;i++){if(a[i].style.display=="none"){a[i].style.display="block"}else{a[i].style.display="none"}}break;default:if(c.style.display=="none"){c.style.display="block"}else{c.style.display="none"}}return false}function hideContentsElements(c,b){switch(b){case"class":for(i=0;i<allHTMLTags.length;i++){if(allHTMLTags[i].className==c){allHTMLTags[i].style.display="none"}}break;case"id":document.getElementById("contentsFrame").contentDocument.getElementById(c).style.display="none";break;case"name":var a=document.getElementById("contentsFrame").contentDocument.getElementsByName(c);for(i=0;i<a.length;i++){a[i].style.display="none"}break;default:c.style.display="none"}return false}function activateIndexLinks(){allHTMLTags=document.getElementById("contentsFrame").contentDocument.getElementsByTagName("*");var a=document.getElementById("index").getElementsByTagName("a");for(i=0;i<a.length;i++){a[i].setAttribute("onclick","hideContentsElements('section', 'class'); return toggleContentsElement(this.href.slice(this.href.lastIndexOf('#')+1), 'id');")}}function addTaskContinueLink(){for(i=0;i<allHTMLTags.length;i++){if(allHTMLTags[i].className=="contents"||allHTMLTags[i].className=="contents_first"){if(xNextSibling(allHTMLTags[i].parentNode)==null){allHTMLTags[i].innerHTML+='<span class="task_start"><a href="#" onclick="hideElements(this.parentNode.parentNode.parentNode.parentNode, null); toggleElement(xFirstChild(this.parentNode.parentNode.parentNode), null); xNextSibling(xFirstChild(xNextSibling(this.parentNode.parentNode.parentNode.parentNode))).setAttribute(\'className\', \'active\'); return toggleElement(xNextSibling(this.parentNode.parentNode.parentNode.parentNode), null);">Go to \''+xFirstChild(xNextSibling(allHTMLTags[i].parentNode.parentNode)).innerHTML+"'</a></span>"}else{allHTMLTags[i].innerHTML+='<span class="task_continue"><a href="#" onclick="hideElements(this.parentNode.parentNode, null); toggleElement(xFirstChild(this.parentNode.parentNode.parentNode), null); inactivetaskhead(); xNextSibling(xFirstChild(xNextSibling(this.parentNode.parentNode.parentNode))).setAttribute(\'className\', \'active\'); return toggleElement(xLastChild(xNextSibling(this.parentNode.parentNode.parentNode)), null);">Click to Continue</a></span>'}}else{if(allHTMLTags[i].className=="intro"){if(xNextSibling(allHTMLTags[i])==null){allHTMLTags[i].innerHTML+='<span class="task_start"><a href="#" onclick="hideElements(this.parentNode.parentNode.parentNode, null); toggleElement(xFirstChild(this.parentNode.parentNode.parentNode), null); xNextSibling(xFirstChild(xNextSibling(this.parentNode.parentNode.parentNode))).setAttribute(\'className\', \'active\'); return toggleElement(xNextSibling(this.parentNode.parentNode.parentNode), null);">Go to \''+xFirstChild(xNextSibling(allHTMLTags[i].parentNode)).innerHTML+"'</a></span>"}}}}return false}function activateTaskToggleLink(){for(i=0;i<allHTMLTags.length;i++){if(allHTMLTags[i].className=="task"){xNextSibling(xFirstChild(allHTMLTags[i])).setAttribute("onclick","inactivetaskhead(); hideElements('contents', 'class'); xNextSibling(xNextSibling(xFirstChild(xNextSibling(xNextSibling(xFirstChild(this.parentNode.parentNode)))))).style.display = 'none'; toggleElement(xNextSibling(this), null); this.focus(); this.setAttribute('className', 'active'); return false;")}}}function inactivetaskhead(){for(i=0;i<allHTMLTags.length;i++){if(allHTMLTags[i].className=="task"){xNextSibling(xFirstChild(allHTMLTags[i])).setAttribute("className","")}}}function xNextSibling(c,a){var b=c?c.nextSibling:null;while(b){if(b.nodeType==1&&(!a||b.nodeName.toLowerCase()==a.toLowerCase())){break}b=b.nextSibling}return b}function xFirstChild(c,a){var b=c?c.firstChild:null;while(b){if(b.nodeType==1&&(!a||b.nodeName.toLowerCase()==a.toLowerCase())){break}b=b.nextSibling}return b}function xLastChild(c,a){var b=c?c.lastChild:null;while(b){if(b.nodeType==1&&(!a||b.nodeName.toLowerCase()==a.toLowerCase())){break}b=b.previousSibling}return b}function prepareContents(){var a=getInternetExplorerVersion();if(a!=-1&&a<8){insertTips()}toggleElement("section","class");toggleElement("contents","class");toggleElement("complete","class");draggableTextArea();setSelectAll();toggleElement("intro","id");addTaskContinueLink();activateTaskToggleLink();swapSVGImages()}function draggableTextArea(){for(i=0;i<allHTMLTags.length;i++){if(allHTMLTags[i].className=="linecode"){}}}function setSelectAll(){for(i=0;i<allHTMLTags.length;i++){if(allHTMLTags[i].className=="codeoptions"){allHTMLTags[i].style.display="block !important";xFirstChild(allHTMLTags[i]).setAttribute("onclick","return selectElementText(xNextSibling(this.parentNode));")}}}function swapSVGImages(){if(supportsSvg()){for(i=0;i<allHTMLTags.length;i++){if(allHTMLTags[i].className=="svg"){allHTMLTags[i].setAttribute("onclick","return expandSVG(this);");xFirstChild(allHTMLTags[i]).src=xFirstChild(allHTMLTags[i]).src.replace(".png",".svg")}}}}function supportsSvg(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")}function expandSVG(a){if(xFirstChild(a).getAttribute("width")=="100%"){xFirstChild(a).setAttribute("width","auto");a.setAttribute("title","click to zoom in")}else{xFirstChild(a).setAttribute("width","100%");a.setAttribute("title","click to zoom out")}}var openLists=[],oIcount=0;function compactMenu(d,c,b,e){if(!document.getElementsByTagName||!document.childNodes||!document.createElement){return}var a=document.getElementById(d);if(!a){return}compactChildren(a,0,d,c,b,a.tagName.toUpperCase(),e&&b)}function compactChildren(f,c,m,d,o,l,a){if(!c){m=escape(m);if(d){openLists[m]=[]}}for(var n=0,k=f.childNodes;n<k.length;n++){if(k[n].tagName){var g=k[n].getElementsByTagName(l)[0];if(g){g.style.display="none";var b=document.createElement("A");b.setAttribute("href","#");b.className="close";b.onclick=new Function("clickSmack(this,"+c+",'"+m+"',"+d+",'"+escape(l)+"');return false;");if(a){var h=""}else{var j=k[n].innerHTML.toUpperCase().indexOf("<"+l);var e=k[n].innerHTML.toUpperCase().indexOf("<A");var h=k[n].innerHTML.substr(0,(e+1&&e<j)?e:j);while(!k[n].childNodes[0].tagName||(k[n].childNodes[0].tagName.toUpperCase()!=l&&k[n].childNodes[0].tagName.toUpperCase()!="A")){k[n].removeChild(k[n].childNodes[0])}}k[n].insertBefore(b,k[n].childNodes[0]);k[n].childNodes[0].innerHTML=o+h.replace(/^\s*|\s*$/g,"");g.MWJuniqueID=oIcount++;compactChildren(g,c+1,m,d,o,l,a)}}}}function clickSmack(f,c,e,d,b){if(f.blur){f.blur()}f=f.parentNode.getElementsByTagName(unescape(b))[0];if(d){for(var a=openLists[e].length-1;a>=c;a-=1){if(openLists[e][a]){openLists[e][a].style.display="none";xFirstChild(f.parentNode).className="close";if(c!=a){openLists[e][a]=null}}}if(f==openLists[e][c]){openLists[e][c]=null}else{f.style.display="block";openLists[e][c]=f;xFirstChild(f.parentNode).className="open"}}else{if(f.style.display=="block"){f.style.display="none";xFirstChild(f).className="close"}else{f.style.display="block";xFirstChild(f).className="open"}}}function stateToFromStr(e,f){if(!document.getElementsByTagName||!document.childNodes||!document.createElement){return""}var d=document.getElementById(e);if(!d){return""}if(!f&&typeof(f)!="undefined"){return""}if(f){f=f.split(":")}for(var c="",b=d.getElementsByTagName(d.tagName),a=0;b[a];a++){if(f&&MWJisInTheArray(b[a].MWJuniqueID,f)&&b[a].style.display=="none"){b[a].parentNode.getElementsByTagName("a")[0].onclick()}else{if(b[a].style.display!="none"){c+=(c?":":"")+b[a].MWJuniqueID}}}return c}function MWJisInTheArray(c,a){for(var b=0;b<a.length;b++){if(c==a[b]){return true}}return false}function selfLink(f,b,a,d){var h;if(!document.getElementsByTagName||!document.childNodes){return}f=document.getElementById(f);if(d){h=document.createElement("a");h.setAttribute("href",d)}for(var j=0,g=f.getElementsByTagName("a");g[j];j++){if(g[j].getAttribute("href")&&!g[j].href.match(/#$/)&&getRealAddress(g[j])==getRealAddress(d?h:location)){g[j].className=(g[j].className?(g[j].className+" "):"")+b;if(a){a=false;for(var e=g[j].parentNode,c="";e!=f&&e!=document.body;e=e.parentNode){if(e.tagName&&e.tagName==f.tagName){c=e.MWJuniqueID+(c?(":"+c):"")}}stateToFromStr(f.id,c)}}}}function getRealAddress(a){return a.protocol+((a.protocol.indexOf(":")+1)?"":":")+a.hostname+((typeof(a.pathname)==typeof(" ")&&a.pathname.indexOf("/")!=0)?"/":"")+a.pathname+a.search}function expandCollapseAll(g,d){if(!document.getElementsByTagName||!document.childNodes){return}var c=document.getElementById(g);var f=c.tagName;var a=c.getElementsByTagName(f);for(var e=0,b;e<a.length;e++){if(typeof(a[e].MWJuniqueID)!="undefined"){b=a[e].parentNode.getElementsByTagName("a")[0];if(b&&((d&&a[e].style.display=="none")||(!d&&a[e].style.display!="none"))){b.onclick()}}}}function selectElementText(b,e){e=e||window;var d=e.document,c,a;if(e.getSelection&&d.createRange){c=e.getSelection();a=d.createRange();a.selectNodeContents(b);c.removeAllRanges();c.addRange(a)}else{if(d.body.createTextRange){a=d.body.createTextRange();a.moveToElementText(b);a.select()}}}function addLoadEvent(a){var b=window.onload;if(typeof window.onload!="function"){window.onload=a}else{window.onload=function(){b();a()}}}function prepareInputsForHints(){var a=document.getElementsByTagName("input");for(var d=0;d<a.length;d++){a[d].onfocus=function(){this.parentNode.getElementsByTagName("span")[0].style.display="inline"};a[d].onblur=function(){this.parentNode.getElementsByTagName("span")[0].style.display="none"}}var c=document.getElementsByTagName("select");for(var b=0;b<c.length;b++){c[b].onfocus=function(){this.parentNode.getElementsByTagName("span")[0].style.display="inline"};c[b].onblur=function(){this.parentNode.getElementsByTagName("span")[0].style.display="none"}}};