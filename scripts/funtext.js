(function(d,b,a,e){var c="funText";d[c]=function(h,i,k){var j=this;j.$el=d(h);j.el=h;var l={rainbow:["#8641ce","#43237e","#0044f7","#387919","#fff84a","#ef8834","#ea412c"],candy:["#78c5d6","#459ba8","#79c267","#c5d647","#f5d63d","#f28c33","#e868a2","#bf62a6"]};
l.reverseRainbow=l.rainbow.slice(0).reverse();l.reverseCandy=l.candy.slice(0).reverse();var g={solidColor:true};var f={throttle:function(r,t){var p,o,s,m;
var q=0;var n=function(){q=new Date;s=null;m=r.apply(p,o);};return function(){var u=new Date;var v=t-(u-q);p=this;o=arguments;if(v<=0){clearTimeout(s);
s=null;q=u;m=r.apply(p,o);}else{if(!s){s=setTimeout(n,v);}}return m;};},buildShadow:function(m,p){var n=0,o="";while(n++<j.shadowSize){if(n!==1){o+=",";
}o+=" "+parseInt(n*m)+"px "+parseInt(n*p)+"px 0 "+((g.solidColor)?j.shadowColor:j.shadowColor[parseInt((j.shadowColor.length/j.shadowSize)*(n-1))]);}return o;
},watchMouse:function(m){j.$el.css("text-shadow",f.buildShadow(((m.pageX-b.innerWidth/2)/(b.innerWidth/2))*-1,((m.pageY-b.innerHeight/2)/(b.innerWidth/2))*-1));
},init:function(){if(typeof(i)==="undefined"||i===null){i=10;}else{if(typeof(i)!=="number"&&(typeof(k)==="undefined"||k===null)){k=i;i=10;}}if(typeof(k)==="undefined"||k===null){k="#e74c3c";
}else{if(typeof(l[k])!=="undefined"){g.solidColor=false;k=l[k];}else{if(typeof(k)==="object"||Object.prototype.toString.call(k)==="[object Array]"){if(k.length===1){k=k[0];
}else{g.solidColor=false;}}}}j.shadowSize=i;j.shadowColor=k;j.$el.css("text-shadow",f.buildShadow(1,1));d(a).off("mousemove."+c);d(a).on("mousemove."+c,f.throttle(f.watchMouse,50));
}};f.init();};d.fn[c]=function(f,g){return this.each(function(){(new d[c](this,f,g));});};})(jQuery,window,document);