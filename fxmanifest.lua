fx_version 'bodacious'
game 'gta5'

name "sc_hud"
author "Scube Scripts"
version "1.0.2"
description "A simple and clean hud"

client_scripts {
    "client.lua"
}

server_scripts {
    'versioncheck.lua'
}

ui_page ("ui/ui.html")

files {"**/**/**/**/**/**/*.*"}
