function resizeThumbnail(e,i,s){for(var t=document.getElementById(e),l=t.getElementsByTagName("img"),n=0;n<l.length;n++)l[n].src=l[n].src.replace(/\/s72\-c/,"/s"+i),l[n].width=i,l[n].height=s}resizeThumbnail("PopularPosts1",280,140);;
(function(e,p){e.extend({lockfixed:function(a,b){b&&b.offset?(b.offset.bottom=parseInt(b.offset.bottom,10),b.offset.top=parseInt(b.offset.top,10)):b.offset={bottom:100,top:0};if((a=e(a))&&a.offset()){var n=a.css("position"),c=parseInt(a.css("marginTop"),10),l=a.css("top"),g=a.offset().top,h=!1;if(!0===b.forcemargin||navigator.userAgent.match(/\bMSIE (4|5|6)\./)||navigator.userAgent.match(/\bOS ([0-9])_/)||navigator.userAgent.match(/\bAndroid ([0-9])\./i))h=!0;e(window).bind("scroll resize orientationchange load lockfixed:pageupdate",
a,function(k){if(!h||!document.activeElement||"INPUT"!==document.activeElement.nodeName){var d=0,d=a.outerHeight();k=a.outerWidth();var m=e(document).height()-b.offset.bottom,f=e(window).scrollTop();"fixed"!=a.css("position")&&(g=a.offset().top,c=parseInt(a.css("marginTop"),10),l=a.css("top"));f>=g-(c?c:0)-b.offset.top?(d=m<f+d+c+b.offset.top?f+d+c+b.offset.top-m:0,h?a.css({marginTop:parseInt((c?c:0)+(f-g-d)+2*b.offset.top,10)+"px"}):a.css({position:"fixed",top:b.offset.top-d+"px",width:k+"px"})):
a.css({position:n,top:l,width:k+"px",marginTop:(c?c:0)+"px"})}})}}})})(jQuery);;
$(document).ready(function(){var o=$("#mdcmenu").offset().top,n=function(){var n=$(window).scrollTop();n>o?$("#mdcmenu").css({position:"fixed",top:0,"z-index":9999}):$("#mdcmenu").css({position:"relative"})};n(),$(window).scroll(function(){n()})});

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('I 16,11;(M(n,m,k){I d={1B:"",1i:1,1b:"2h://2g.2f.2d",Y:7,15:2c,S:"1h",F:2b,1m:"2a:29/26;23,22/21+20",1g:"i-8",1j:19,1l:"1Z 1X",1o:M(){}};18(I f R 17){d[f]=(17[f]=="1W")?d[f]:17[f]}I j=M(a){I b=m.1V("13");b.1U="12/1T";b.P=a;k.1O(b)},o=M(b,a){U V.1w(V.1x()*(a-b+1))+b},l=M(a){I p=a.Q,c,b;L(p===0){U 19}1N(--p){c=V.1w(V.1x()*(p+1));b=a[p];a[p]=a[c];a[c]=b}U a},e=(1K 14=="1J"&&14.Q>0)?"/-/"+l(14)[0]:"",h=M(b){I c=b.1r.1I$1H.$t-d.Y,a=o(1,(c>0?c:1));j(d.1b.N(/\\/$/,"")+"/1p/1q/K"+e+"?O=1t-R-13&1u=1v&1F-1E="+a+"&1y-1z="+d.Y+"&1A=11")},g=M(z){I s=1c.24(d.1g),x=l(z.1r.1G),A=d.1i,c=d.1B+\'<1n B="i-8-1k-\'+A+\'">\',b=d.1j?\' 1L="1M"\':"",y=\'<E 1k="1P:1Q;1R:1S;"></E>\',v,t,w,r,u;L(!s){U}18(I q=0;q<d.Y;q++){L(q==x.Q){1Y}t=x[q].D.$t;w=(d.S!=="1h"&&d.S<t.Q)?t.1f(0,d.S)+"&1e;":t;r=("1C$G"R x[q]&&d.F!==19)?x[q].1C$G.1D.N(/\\/s[0-9]+(\\-c)?/,"/s"+d.F):d.1m;u=("K"R x[q]&&d.15>0)?x[q].K.$t.N(/<25 ?\\/?>/g," ").N(/<.*?>/g,"").N(/[<>]/g,"").1f(0,d.15)+"&1e;":"";18(I p=0,a=x[q].1a.Q;p<a;p++){v=(x[q].1a[p].27=="28")?x[q].1a[p].J:"#"}L(A==2){c+=\'<H><W O="G" B="i-8-C-G" P="\'+r+\'" X="\'+d.F+\'" Z="\'+d.F+\'" D="\'+t+\'"><a B="i-8-C-D" D="\'+t+\'" J="\'+v+\'"\'+b+">"+w+\'</a><E B="i-8-C-K"><E B="i-8-C-K-12">\'+u+\'</E> <a J="\'+v+\'" B="i-8-C-2e"\'+b+">"+d.1l+"</a></E>"+y+"</H>"}10{L(A==3||A==4){c+=\'<H B="i-8-C" 1s="0"><a B="i-8-C-D" J="\'+v+\'"\'+b+\'><W O="G" B="i-8-C-G" P="\'+r+\'" X="\'+d.F+\'" Z="\'+d.F+\'" D="\'+t+\'"></a><T B="i-8-C-1d"><a B="i-8-C-D" D="\'+t+\'" J="\'+v+\'"\'+b+">"+w+"</a></T>"+y+"</H>"}10{L(A==5){c+=\'<H B="i-8-C" 1s="0"><a B="i-8-C-2i" J="\'+v+\'" D="\'+t+\'"\'+b+\'><W O="G" B="i-8-C-G" P="\'+r+\'" X="\'+d.F+\'" Z="\'+d.F+\'" D="\'+t+\'"><E B="i-8-C-1d">\'+w+"</E></a>"+y+"</H>"}10{L(A==6){c+=\'<H><a B="i-8-C-D" D="\'+t+\'" J="\'+v+\'"\'+b+">"+w+\'</a><T B="i-8-C-1d"><W O="G" B="i-8-C-G" P="\'+r+\'" X="\'+d.F+\'" Z="\'+d.F+\'" D="\'+t+\'"><E B="i-8-C-K"><E B="i-8-C-K-12">\'+u+"</E></E>"+y+"</T></H>"}10{c+=\'<H><a D="\'+t+\'" J="\'+v+\'"\'+b+">"+w+"</a></H>"}}}}}s.2j=c+="</1n>"+y;d.1o()};16=h;11=g;j(d.1b.N(/\\/$/,"")+"/1p/1q/K"+e+"?O=1t-R-13&1u=1v&1y-1z=0&1A=16")})(2k,1c,1c.2l("2m")[0]);',62,147,'||||||||post||||||||||related|||||||||||||||||||class|item|title|span|thumbnailSize|thumbnail|li|var|href|summary|if|function|replace|alt|src|length|in|titleLength|div|return|Math|img|width|numPosts|height|else|showRelatedPost|text|script|labelArray|summaryLength|randomRelatedIndex|relatedPostConfig|for|false|link|homePage|document|tooltip|hellip|substring|containerId|auto|widgetStyle|newTabLink|style|moreText|noImage|ul|callBack|feeds|posts|feed|tabindex|json|orderby|updated|floor|random|max|results|callback|widgetTitle|media|url|index|start|entry|totalResults|openSearch|object|typeof|target|_blank|while|appendChild|display|block|clear|both|javascript|type|createElement|undefined|Selengkapnya|break|Baca|AX7vOF2TAAAAAElFTkSuQmCC|gAAAADElEQVQImWOor68HAAL|iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U|base64|getElementById|br|png|rel|alternate|image|data|72|370|com|more|blogspot|mdcsite|http|wrapper|innerHTML|window|getElementsByTagName|head'.split('|'),0,{}))

(function() {
var dr = document.createElement('script');
dr.type = 'text/javascript'; dr.async = true;
dr.src = '//share.donreach.com/buttons.js';
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dr);
})();

(function() { var ad = document.createElement('script'); ad.type = 'text/javascript'; ad.async = true; ad.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'; var sc = document.getElementsByTagName('script')[0]; sc.parentNode.insertBefore(ad, sc); })();
