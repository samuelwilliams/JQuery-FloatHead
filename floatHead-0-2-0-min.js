/*
 * This file is part of the JQuery FloatHead Plugin.
 *
 * (c) Samuel Williams <sam@swilliams.com.au>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
(function(a){a.fn.floatHead=function(){return this.each(function(){var b=a(this);var c=a("thead tr",b).height();var d=a(this).css("margin-top");var e=a(this).height();var f=a("thead",b).offset().top;var g=parseInt(c)+parseInt(d);var h=parseInt(e)+parseInt(f)-parseInt(c);a(window).scroll(function(){var c=a(window).scrollTop();var e=[];a("tbody tr:first td",b).each(function(){e.push(a(this).width())});if(c<f||c>h){a("thead",b).css("position","static");a(b).css("margin-top",d)}else{a("thead",b).css("position","fixed");a("thead",b).css("top","0");a(b).css("margin-top",g+"px");var i=0;a("thead tr th",b).each(function(){a(this).width(e[i]);i++});var i=0;a("tbody tr:first td",b).each(function(){a(this).width(e[i]);i++})}})})}})(jQuery)