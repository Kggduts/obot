import { Commands } from "../typings/typings.js"

const helpCommand: Commands = {
    name: "help",
    description: "List of Tool Commands",
    execute: (agent, message, ...args) => {
        let document = ""

        for(const command of agent.commands.keys()) document += `**${command}:** ${agent.commands.get(command)?.description}\n`

        document += "Join Our Support Server For Help: https://discord.gg/Yr92g5Zx3e"

        if(args[0]) message.reply(
            agent.commands.keys().some(command => (command == args[0])) 
            ? `**${args[0]}:** ${agent.commands.get(args[0])?.description}`
            : "Command Not Found!"
        )
        else message.reply(document)
    }
}

export default helpCommand;