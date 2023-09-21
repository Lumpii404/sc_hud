local githubRepoURL = "https://raw.githubusercontent.com/ScubeScripts/sc_hud/master/version"

function CheckVersion()
    PerformHttpRequest(githubRepoURL, function(errorCode, resultData, resultHeaders)
        if errorCode == 200 then
            local remoteVersion = string.gsub(resultData, "\n", "")
            local latestVersion = GetResourceMetadata(GetCurrentResourceName(), 'version', 0)

            if remoteVersion ~= latestVersion then
                print("^7[^1INFO^7] ^3sc_hud is outdated. Please update to the latest version. https://github.com/ScubeScripts/sc_hud")
            else
                print("^7[^2INFO^7] ^7sc_hud is up to date! ^7(^21.0.3^7)")
            end
        else
            print("^8Error retrieving version data.")
        end
    end)
end

CheckVersion()
