jQuery.webshims.register("form-native-fix",function(a,d,c,o,g){if(Modernizr.formvalidation&&!Modernizr.bugfreeformvalidation&&!d.bugs.bustedValidity){var m=a.browser.webkit,f=[],e,i;if(c.addEventListener){var j=g,h=!1;c.addEventListener("submit",function(b){if(!h&&b.target.checkValidity&&null==a.attr(b.target,"novalidate")&&(a("input:invalid, select:invalid, textarea:invalid",b.target).length&&(a(b.target).unbind("submit.preventInvalidSubmit").bind("submit.preventInvalidSubmit",function(n){null==
a.attr(b.target,"novalidate")&&(n.stopImmediatePropagation(),m&&n.preventDefault());b.target&&a(b.target).unbind("submit.preventInvalidSubmit")}),d.moveToFirstEvent(b.target,"submit")),!c.opera))d.fromSubmit=!0,a(b.target).checkValidity(),d.fromSubmit=!1},!0);g=function(b){null!=a.attr(b.target,"formnovalidate")&&(j&&clearTimeout(j),h=!0,j=setTimeout(function(){h=!1},20))};c.addEventListener("click",g,!0);c.addEventListener("touchstart",g,!0);c.addEventListener("touchend",g,!0)}a(document).bind("firstinvalidsystem",
function(b,a){if(i=a.form)e=!1,f=[],d.fromSubmit&&(e=a)}).bind("invalid",function(a){-1==f.indexOf(a.target)?f.push(a.target):a.stopImmediatePropagation()}).bind("lastinvalid",function(b,c){var l=c.invalidlist[0];l&&(m||a.nodeName(l,"select"))&&document.activeElement&&l!==document.activeElement&&e&&!e.isInvalidUIPrevented()&&d.validityAlert.showFor(l);e=!1;f=[];i&&a(i).unbind("submit.preventInvalidSubmit")});a.browser.webkit&&Modernizr.inputtypes.date&&function(){var b={updateInput:1,input:1},c={date:1,
time:1,"datetime-local":1},d={focusout:1,blur:1},g={updateInput:1,change:1},e=function(a){var c,e=!0,f=a.prop("value"),i=f,k=function(c){if(a){var d=a.prop("value");d!==f&&(f=d,(!c||!b[c.type])&&a.trigger("input"));c&&g[c.type]&&(i=d);!e&&d!==i&&a.trigger("change")}},j,h=function(b){clearInterval(c);setTimeout(function(){b&&d[b.type]&&(e=!1);a&&(a.unbind("focusout blur",h).unbind("input change updateInput",k),k());a=null},1)};clearInterval(c);c=setInterval(k,160);clearTimeout(j);j=setTimeout(k,9);
a.unbind("focusout blur",h).unbind("input change updateInput",k);a.bind("focusout blur",h).bind("input updateInput change",k)};if(a.event.customEvent)a.event.customEvent.updateInput=!0;a(o).bind("focusin",function(b){b.target&&c[b.target.type]&&!b.target.readOnly&&!b.target.disabled&&e(a(b.target))})}()}});