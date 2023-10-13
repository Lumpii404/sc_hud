local hunger = {}
local thirst = {}
local air = {}

RegisterServerEvent('hud:getStatus')
AddEventHandler('hud:getStatus', function()
    local playerId = source
    TriggerClientEvent('hud:updateStatus', playerId, hunger[playerId] or 0, thirst[playerId] or 0, air[playerId] or 100)
end)

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(60000)
        
        for _, playerId in ipairs(GetPlayers()) do
            hunger[playerId] = math.random(0, 100)
            thirst[playerId] = math.random(0, 100)
            air[playerId] = math.random(0, 100)
        end
    end
end)

local githubRepoURL = "https://raw.githubusercontent.com/ScubeScripts/sc_hud/master/version"

function CheckVersion()
    PerformHttpRequest(githubRepoURL, function(errorCode, resultData, resultHeaders)
        if errorCode == 200 then
            local remoteVersion = string.gsub(resultData, "\n", "")
            local latestVersion = GetResourceMetadata(GetCurrentResourceName(), 'version', 0)

            if remoteVersion ~= latestVersion then
                print("^7[^1INFO^7] ^3sc_hud is outdated. Please update to the latest version. ^7(^2".. remoteVersion .."^7)^3 https://github.com/ScubeScripts/sc_hud")
            else
                print("^7[^2INFO^7] ^7sc_hud is up to date! ^7(^2".. latestVersion .."^7)")
            end
        else
            print("^7[^8ERROR^7] Version data retrieval not possible!")
        end
    end)
end

Citizen.CreateThread(function()
    while true do
        CheckVersion()
        Citizen.Wait(3600000)
    end
end)


