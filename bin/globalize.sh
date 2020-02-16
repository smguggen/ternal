#!/bin/bash

if [[ $1 ]]; then
    path=$1;
else
    path="/usr/local/bin";
fi

if [[ -d $path ]]; then
    loc=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
    cp "$loc/xternal.sh" "$path/xternal";
    chmod +x "$path/xternal";

    if [[ "$PATH" != *"$path"* ]]; then
        export PATH="$PATH:$path";
        echo -e "\n\x1b[1;33mWARNING:\x1b[0m \x1b[36m$path\x1b[0m is not in your profile \x1b[36m\$PATH\x1b[0m. Executable is now active but add \x1b[36m$path\x1b[0m to your \x1b[36m\$PATH\x1b[0m variable before restarting."
    else 
        echo -e "\n\x1b[1;32mxternal\x1b[0m command now globally executable."
    fi 
else
    echo -e "\n\x1b[1;31mERROR:\x1b[0m \x1b[31m$path not found.\x1b[0m"
fi