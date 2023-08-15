local githubRepoURL = "https://raw.githubusercontent.com/ScubeScripts/sc_hud/master/version"

function CheckVersion()
    PerformHttpRequest(githubRepoURL, function(errorCode, resultData, resultHeaders)
        if errorCode == 200 then
            local remoteVersion = string.gsub(resultData, "\n", "")
            local latestVersion = GetResourceMetadata(GetCurrentResourceName(), 'version', 0)

            print("^2Local Version: " .. latestVersion)
            print("^3Latest Version: " .. remoteVersion)

            if remoteVersion ~= latestVersion then
                print("^3Your script is outdated. Please update to the latest version. https://github.com/ScubeScripts/sc_hud")
            else
                print("^2Your script is up to date.")
            end
        else
            print("^8Error retrieving version data.")
        end
    end)
end

CheckVersion()
