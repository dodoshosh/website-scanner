import ServerScan from "./ServerScan";

export const StaticList = 
{
    "help":"Try to type: \"list\"",
    "list":`Here's a list of the supported commands:
            ls - list directory contents.
            scan - performs a scan on the specified website for common vulnerabilities.
            cowsay - ASCII cow that speaks a message.`,
    "ls":`.
          ..
            `,
    "Unkown command.":`Unkown command.
    Type \"help\" if you need to.`,
    "":""  
};

export const CommandList = ["scan","cowsay"];

export function commandHandler(userinput)
{
    let splited = splitCommand(userinput);
    
    const command = splited[0];
    splited.splice(0,1);
    const params = splited;

    console.log(command, params);

    switch(command)
    {
        case "scan":
            return scanHandler(params);    
            break;

        case "cowsay":
            return cowsayHandler(params);    
            break;

        default:
            return (
                `Unkown command.
                Type \"help\" if you need to.`
            );
            break;

    }
}

const splitCommand = (stringInp) => {
    return stringInp.split(' ');
}

const cowsayHandler = (params) => {
    console.log("omg")
    if (params.length === 0)
        return "Error: Missing Parameters. Try \"cowsay -h\" For Help."
    else if (params[0] === "-h")
        return (`
        NAME
            cowsay - ASCII cow that speaks a message

        DESCRIPTION
            cowsay is a simple command-line tool that generates ASCII art of a cow saying a message that you provide. It can be useful for adding some flavor to scripts or for making fun of your friends.

        OPTIONS
            -h
                    Show the help message and exit.

            -b
                    Borg
            -d
                    dead
            -p
                    paranoid
            -s
                    stoned
            -y
                    youthful
            -dr
                    dragon
            -pe
                    penguin
                    
        EXAMPLES
            cowsay "Hello, World!"

            cowsay -t "Hello, World!"

            cowsay -p "Hello, World!"

        `)    
    else if (params.length === 1)
        return (`
            _______________________ 
            < ${params[0]     }    >
             ----------------------- 
                    \   ^__^
                     \  (oo)\_______
                        (__)\       )\/\
                            ||----w |
                            ||     ||
    `)
    
    let option = params[0]
    let text = params[1]

    switch (option) {
        case '-b':
            return (`
            _______________________ 
            < ${text             }  >
             ----------------------- 
                    \   ^__^
                     \  (==)\_______
                        (__)\       )\/\
                            ||----w |
                            ||     ||
            `)
            break;

        case '-p':
            return (`
            ______________________ 
            < ${text             } >
             ---------------------- 
                    \   ^__^
                     \  (@@)\_______
                        (__)\       )\/\
                            ||----w |
                            ||     ||
            `)
            break;

        case '-d':
            return (`
            ______________________ 
            < ${text             } >
             ---------------------- 
                    \   ^__^
                     \  (xx)\_______
                        (__)\       )\/\
                         U  ||----w |
                            ||     ||
            `)
            break;

        case '-pe':
            return (`
            _______________________
            < ${text             }  >
             -----------------------
               \
                \
                    .--.
                   |o_o |
                   |:_/ |
                  //   \ \
                 (|     | )
                /'\_   _/'\
                \___)=(___/
                                          
            `)
            break;

        case '-s':
            return (`
            ______________________ 
            < ${text             } >
             ---------------------- 
                    \   ^__^
                     \  (**)\_______
                        (__)\       )\/\
                         U  ||----w |
                            ||     ||
            `)
            break;

        case '-dr':
            return (`
            _______________________
            < ${text             }  >
             -----------------------
                  \                    / \  //\
                   \    |\___/|      /   \//  \\
                        /0  0  \__  /    //  | \ \
                       /     /  \/_/    //   |  \  \
                       @_^_@'/   \/_   //    |   \   \
                       //_^_/     \/_ //     |    \    \
                    ( //) |        \///      |     \     \
                  ( / /) _|_ /   )  //       |      \     _\
                ( // /) '/,_ _ _/  ( ; -.    |    _ _\.-~        .-~~~^-.
              (( / / )) ,-{        _      -.|.-~-.           .~         .
             (( // / ))  '/\      /                 ~-. _ .-~      .-~^-.  \
             (( /// ))      .   {            }                   /      \  \
              (( / ))     .----~-.\        \-'                 .~         \  . \^-.
                         ///.----..>        \             _ -~             .  ^-  ^-_
                           ///-._ _ _ _ _ _ _}^ - - - - ~                     ~-- ,.-~
                                                                              /.-~          
            
            `)
            break;

        case '-y':
            return (`
            ______________________ 
            < ${text             } >
             ---------------------- 
                    \   ^__^
                     \  (..)\_______
                        (__)\       )\/\
                            ||----w |
                            ||     ||
            `)
            break;

        default:
            return "Wrong Parameter. Try \"cowsay -h\" For Help."
    }
}   

const scanHandler = (params) => {
    if (params.length === 0)
        return (`Error: Missing Parameters. Try \"scan -h\" For Help.`);
    else if (params[0] === "-h")
        return (`
        NAME
            scan - This utility performs a scan on the specified website for common vulnerabilities.

        SYNOPSIS
            scan [URL] [IP]

        DESCRIPTION
            This utility accepts a URL or IP address and performs a scan on it. 
            Upon completion of the scan, the website will be assigned a safety score ranging from 1 to 10, 
            and a report detailing any vulnerabilities discovered will be generated.

        EXAMPLES
            scan 8.8.8.8

            scan www.example.com

        AUTHOR
            Ido Shoshani and Yonadav Mizrahi.

        `);
    
    const results = ServerScan(params[0])
    return(`

        Score: ${results.score} / 10.

        Report: 
        ${results.report}

    `);
}