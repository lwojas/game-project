var hasGP = false;
var repGP;
var startPos = 0;
var gp;

var input = {
    left: false,
    right: false
};
 
    function canGame() {
        return "getGamepads" in navigator;
    }
 
    /*function reportOnGamepad() {
        var gp = navigator.getGamepads()[0];
        var html = "";
            html += "id: "+gp.id+"<br/>";
 
        for(var i=0;i<gp.buttons.length;i++) {
            html+= "Button "+(i+1)+": ";
            if(gp.buttons[i].pressed) html+= " pressed";
            html+= "<br/>";
        }
 
        for(var i=0;i<gp.axes.length; i+=2) {
            html+= "Stick "+(Math.ceil(i/2)+1)+": "+gp.axes[i]+","+gp.axes[i+1]+"<br/>";
        }
 
        $("#gamepadDisplay").html(html);
    }*/
 
    $(document).ready(function() {
 		
 		
        
        if(canGame()) {
 
            var prompt = "To begin using your gamepad, connect it and press any button!";
            $("#gamepadPrompt").text(prompt);
 
            $(window).on("gamepadconnected", function() {
                hasGP = true;
                gp = navigator.getGamepads()[0];
                $("#gamepadPrompt").html("Gamepad connected!");
                console.log("connection event");
                repGP = window.setInterval(checkGamepad,1);
            });
 
            $(window).on("gamepaddisconnected", function() {
                console.log("disconnection event");
                $("#gamepadPrompt").text(prompt);
                window.clearInterval(repGP);
            });
 
            //setup an interval for Chrome
            var checkGP = window.setInterval(function() {
                console.log('checkGP');
                if(navigator.getGamepads()[0]) {
                    if(!hasGP) $(window).trigger("gamepadconnected");
                    window.clearInterval(checkGP);
                }
            }, 500);

            function checkGamepad() {
            		// console.log('this function has fired');
					gp = navigator.getGamepads()[0];
					/*var axeLF = gp.axes[0];
                    // console.log(gp);
					if(axeLF < -0.5) {
						input.left = true;
						input.right = false;
						$('h1').css('left', startPos = startPos-10);
					} else if(axeLF > 0.5) {
						input.left = false;
						input.right = true;
						$('h1').css('left', startPos = startPos+10);
					} else {
						input.left = false;
						input.right = false;
					}*/
			}
        }
 
    });