fx_version 'bodacious'
game 'gta5'

name "sc_hud"
author "Scube Scripts"
version "1.1.4"
description "A simple and clean hud"

client_scripts {
    "client.lua"
}

server_scripts {
    'server.lua',
    'versioncheck.lua'
}

ui_page ("ui/ui.html")

files {"**/**/**/**/**/**/*.*"}
