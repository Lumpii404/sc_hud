$(()=>{
    window.addEventListener("message", (event)=>{
        let e = event.data


        if (e.action === "UpdateHud") {
            $("#healthBar").css({"width": Math.round(e.health) + "%"});
            $("#hungerBar").css({"width": Math.round(e.hunger) + "%"});
            $("#thirstBar").css({"width": Math.round(e.thirst) + "%"});
            $("#armourBar").css({"width": Math.round(e.armour) + "%"});
            $('#playerId').text(e.playerId);
            $('#playerId').text(e.playerId);
            $('.fa-id-card').css({"color": "#3498db"});
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
            $(".fa-shield").css({"color": "rgb(55, 107, 211)"})
            $("#armour").show(300)
            $("#iconarmour").show(300)                 
        } else if (Math.round(e.armour) >= 25) {
            $("#armourBar").css({"background-color": "red"})
            $(".fa-shield").css({"color": "red"})
            $('.fa-shield').fadeOut(100).fadeIn(100)             
        } else if (Math.round(e.armour) <= 25) {
            $("#armour").hide(300)
            $("#iconarmour").hide(300)      
        }

        if (Math.round(e.hunger) >= 26) {
            $("#hungerBar").css({"background-color": "rgb(236, 228, 61)","box-shadow": "0 0 10px rgba(236, 228, 61, 0.8), 0 0 20px rgba(236, 228, 61, 0.6), 0 0 30px rgba(236, 228, 61, 0.4), 0 0 40px rgba(236, 228, 61, 0.2)"})
            $(".fa-cutlery").css({"color": "rgb(236, 228, 61)"})                 
        } else if (Math.round(e.hunger) >= 25) {
            $("#hungerBar").css({"background-color": "red"})
            $(".fa-cutlery").css({"color": "red"})
            $('.fa-cutlery').fadeOut(100).fadeIn(100)             
        }

        if (Math.round(e.thirst) >= 26) {
            $("#thirstBar").css({"background-color": "rgb(17, 200, 206)","box-shadow": "0 0 10px rgba(17, 200, 206, 0.8), 0 0 20px rgba(17, 200, 206, 0.6), 0 0 30px rgba(17, 200, 206, 0.4), 0 0 40px rgba(17, 200, 206, 0.2)"})
            $(".fa-glass").css({"color": "rgb(17, 200, 206)"})                 
        } else if (Math.round(e.thirst) >= 25) {
            $("#thirstBar").css({"background-color": "red"})
            $(".fa-glass").css({"color": "red"})
            $('.fa-glass').fadeOut(100).fadeIn(100)             
        }
    })    
})