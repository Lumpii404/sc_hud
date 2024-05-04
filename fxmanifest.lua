fx_version 'bodacious'
game 'gta5'

name "sc_hud"
author "Scube Scripts"
version "3.0.4"
description "A simple and clean hud"

client_scripts {
    "main/client.lua"
}

server_scripts {
    'main/server.lua',
    "main/updater.lua"
}

ui_page ("main/ui/ui.html")

files {
    "**/**/**/**/**/**/*.*",
    'stream/**'
}
