#!/bin/bash

params=""
flags=""
color="";
format="";
bg="";
text="";
while [ $# -gt 0 ]; do
    case "$1" in
        -c | --color) color=$2;
        shift 2;
        ;;
        -f | --format) format=$2;
        shift 2;
        ;;
        -t | --text) text=$2;
        shift 2;
        ;;
        -b | --bg) bg=$2;
        shift 2;
        ;;
        *) params="$params $1"
        shift;
        ;;
    esac
done
eval set -- "$params"


if [ -z $color ] && [ $# -ge 1 ]; then
    color=$1;
    shift;
fi

if [ -z $text ] && [ $# -ge 1 ]; then
    text=$1;
fi
    
if [[ $bg ]]; then
    case $bg in
        red | r | maroon | tomoto | t)
            bg=41
        ;;
        
        black | bl | dark | d)
            bg=40
        ;;
        
        green | g | kelly | k)
            bg=42
        ;;
        
        yellow | y)
            bg=43
        ;;
        
        blue | b | navy | n | sky | s)
            bg=44
        ;;
        
        magenta | m)
            bg=45
        ;;
        
        cyan | c)
            bg=46
        ;;
        
        *)
            bg=""
        ;;
    esac
fi

if [[ $format ]]; then
    case $format in
        bold | bright | b)
            format=1
        ;;
        underline | underlined | u)
            format=4
        ;;
        invert | reverse | i | r)
            format=7
        ;;
        hidden | hide | h)
            format=8
        ;;
        *)
            format=""
        ;;
    esac
fi

case $color in
    red | r | maroon | tomoto | t)
        color=31
    ;;
    
    black | bl | dark | d)
        color=30
    ;;
    
    green | g | kelly | k)
        color=32
    ;;
    
    yellow | y)
        color=33
    ;;
    
    blue | b | navy | n | sky | s)
        color=34
    ;;
    
    magenta | m)
        color=35
    ;;
    
    cyan | c)
        color=36
    ;;
    
    *)
        color=37
    ;;
esac

if [[ $bg ]]; then
    color="$bg;$color";
fi

if [[ $format ]]; then
    color="$format;$color";
fi

echo -e "\x1b[${color}m$text\x1b[0m"