//<![CDATA[
$(document).ready(function(){
            //Let's first setup the redirect
        function redirect(){
            window.location.assign('http://www.folfoly.com/');
        }

            //which things we got to check
        function check(){
                if($('#credits').length === 0){
                    redirect();
                }

                else if($('#creditlink').length === 0){
                    redirect();
                }

                else if($("#creditlink").attr("href") !== "http://www.folfoly.com/"){
                    redirect();
                }

                else if($('#creditlink').text() !== "فولفولي){
                    redirect();
                } 
            }
        //execute the function on page load
        check();
        //excute the function at the intervals of 5 seconds.
        setInterval(function () {check()}, 5000);
        });
//]]>
