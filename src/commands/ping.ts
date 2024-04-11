import type { CommandData, SlashCommandProps } from "commandkit";

export const data: CommandData = {
  name: "ping",
  description: "Ping pong!",
  dm_permission: false,
};

export function run({ interaction }: SlashCommandProps) {
  interaction.reply("Pong!");
}
