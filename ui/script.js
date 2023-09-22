$(()=>{
    window.addEventListener("message", (event)=>{
        let e = event.data


        if (e.action === "UpdateHud") {
            $("#healthBar").css({"width": Math.round(e.health) + "%"});
            $("#hungerBar").css({"width": Math.round(e.hunger) + "%"});
            $("#thirstBar").css({"width": Math.round(e.thirst) + "%"});
            $("#staminaBar").css({"width": 100 - Math.round(e.stamina) + "%"});
            $("#airBar").css({"width": 10 * Math.round(e.air) + "%"});
            $("#armourBar").css({"width": Math.round(e.armour) + "%"});
            $('#playerId').text(e.playerId);
            $('#playerId').text(e.playerId);
            $('.fa-id-card').css({"color": "#3498db","text-shadow": "0 0 10px rgba(52, 152, 219, 0.8), 0 0 20px rgba(52, 152, 219, 0.6), 0 0 30px rgba(52, 152, 219, 0.4), 0 0 40px rgba(52, 152, 219, 0.2)"})
        }

        if (Math.round(e.health) >= 26) {
            $("#healthBar").css({"background-color": "rgb(231, 76, 60)","box-shadow": "0 0 10px rgba(231, 76, 60, 0.8), 0 0 20px rgba(231, 76, 60, 0.6), 0 0 30px rgba(231, 76, 60, 0.4), 0 0 40px rgba(231, 76, 60, 0.2)"})              
            $(".fa-heart").css({"color": "rgb(231, 76, 60)"}) 
        } else if (Math.round(e.health) >= 25) {
            $("#healthBar").css({"background-color": "rgb(204, 209, 209)"})
            $(".fa-heart").css({"color": "rgb(231, 76, 60)"}) 
            $('.fa-heart').fadeOut(100).fadeIn(100)             
        }

        if (Math.round(e.armour) >= 26) {
            $("#armourBar").css({"background-color": "rgb(55, 107, 211)","box-shadow": "0 0 10px rgba(55, 107, 211, 0.8), 0 0 20px rgba(55, 107, 211, 0.6), 0 0 30px rgba(55, 107, 211, 0.4), 0 0 40px rgba(55, 107, 211, 0.2)"})
            $(".fa-shield-halved").css({"color": "rgb(55, 107, 211)"})
            $("#armour").show(300)
            $("#iconarmour").show(300)                 
        } else if (Math.round(e.armour) >= 25) {
            $("#armourBar").css({"background-color": "red"})
            $(".fa-shield-halved").css({"color": "red"})
            $('.fa-shield-halved').fadeOut(100).fadeIn(100)             
        } else if (Math.round(e.armour) <= 0) {
            $("#armour").hide(300)
            $("#iconarmour").hide(300)      
        }

        if (Math.round(e.stamina) >= 5 ) {
            $("#staminaBar").css({"background-color": "rgb(0, 255, 0)","box-shadow": "0 0 10px rgba(0, 255, 0, 0.8), 0 0 20px rgba(0, 255, 0, 0.6), 0 0 30px rgba(0, 255, 0, 0.4), 0 0 40px rgba(0, 255, 0, 0.2)"})
            $(".fa-person-running").css({"color": "rgb(0, 255, 0)"})
            $("#stamina").show(300)
            $("#iconstamina").show(300)                            
        } else if (Math.round(e.stamina) <= 5) {
            $("#stamina").hide(300)
            $("#iconstamina").hide(300) 
        }

        if (Math.round(e.air) >= 9 ) {
            $("#air").hide(300)
            $("#iconair").hide(300)                           
        } else if (Math.round(e.air) <= 9) {
            $("#airBar").css({"background-color": "rgb(51, 153, 255)","box-shadow": "0 0 10px rgba(51, 153, 255, 0.8), 0 0 20px rgba(51, 153, 255, 0.6), 0 0 30px rgba(51, 153, 255, 0.4), 0 0 40px rgba(51, 153, 255, 0.2)"})
            $(".fa-wind").css({"color": "rgb(51, 153, 255)"})
            $("#air").show(300)
            $("#iconair").show(300) 
        }

        if (Math.round(e.hunger) >= 26) {
            $("#hungerBar").css({"background-color": "rgb(236, 228, 61)","box-shadow": "0 0 10px rgba(236, 228, 61, 0.8), 0 0 20px rgba(236, 228, 61, 0.6), 0 0 30px rgba(236, 228, 61, 0.4), 0 0 40px rgba(236, 228, 61, 0.2)"})
            $(".fa-utensils").css({"color": "rgb(236, 228, 61)"})                 
        } else if (Math.round(e.hunger) >= 25) {
            $("#hungerBar").css({"background-color": "red"})
            $(".fa-utensils").css({"color": "red"})
            $('.fa-utensils').fadeOut(100).fadeIn(100)             
        }

        if (Math.round(e.thirst) >= 26) {
            $("#thirstBar").css({"background-color": "rgb(17, 200, 206)","box-shadow": "0 0 10px rgba(17, 200, 206, 0.8), 0 0 20px rgba(17, 200, 206, 0.6), 0 0 30px rgba(17, 200, 206, 0.4), 0 0 40px rgba(17, 200, 206, 0.2)"})
            $(".fa-droplet").css({"color": "rgb(17, 200, 206)"})                 
        } else if (Math.round(e.thirst) >= 25) {
            $("#thirstBar").css({"background-color": "red"})
            $(".fa-droplet").css({"color": "red"})
            $('.fa-droplet').fadeOut(100).fadeIn(100)             
        }
    })    
})