/*
 * This file is part of the JQuery FloatHead Plugin.
 *
 * (c) Samuel Williams <sam@swilliams.com.au>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
 
(function( $ ) {
    $.fn.floatHead = function(){

        return this.each(function(){
            var obj = $(this);

            var headHeight = $('thead tr',obj).height();
            var tableMarginTop = $(this).css('margin-top');
            var tableHeight = $(this).height();
            var headInitial = $('thead',obj).offset().top;
            var newMarginTop = parseInt(headHeight) + parseInt(tableMarginTop);
            var tableBottom = parseInt(tableHeight) + parseInt(headInitial) - parseInt(headHeight);

            $(window).scroll(function() {
                var windowPosition = $(window).scrollTop();
                var cells = [];

                    $('tbody tr:first td',obj).each(function(){
                        cells.push($(this).width());
                    });

                if(windowPosition < headInitial || windowPosition > tableBottom)
                {
                    $('thead',obj).css('position','static');
                    $(obj).css('margin-top',tableMarginTop);
                }
                else
                {
                    $('thead',obj).css('position','fixed');
                    $('thead',obj).css('top','0');
                    $(obj).css('margin-top',newMarginTop+'px');

                    var n = 0;
                    $('thead tr th',obj).each(function(){
                        $(this).width(cells[n]);
                        n++;
                    });

                    var n = 0;
                    $('tbody tr:first td',obj).each(function(){
                        $(this).width(cells[n]);
                        n++;
                    });
                }
            });
        });
    }
})( jQuery );