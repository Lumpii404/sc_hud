CreateThread(function()
    while true do
        local msec = 1000;
        local ped = PlayerPedId()

        local stamina = GetPlayerSprintStaminaRemaining(PlayerId())
        local air = GetPlayerUnderwaterTimeRemaining(PlayerId())

        TriggerEvent('esx_status:getStatus', 'hunger', function(status) 
            hunger = status.val / 10000 
        end)
        TriggerEvent('esx_status:getStatus', 'thirst', function(status) 
            thirst = status.val / 10000 
        end)

        SendNUIMessage({
            action = "UpdateHud";
            health = GetEntityHealth(ped) - 100;
            armour = GetPedArmour(ped);
            hunger = hunger;
            thirst = thirst;
            stamina = stamina;
            air = air;
            playerId = GetPlayerServerId(PlayerId());
        })

        Wait(msec)
    end
end)