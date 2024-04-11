import { CommandKit } from "commandkit";
import { Client, GatewayIntentBits } from "discord.js";
import { EnvChecker } from "./env";

class Bot extends Client {
  constructor() {
    super({
      intents: [GatewayIntentBits.Guilds],
    });
  }

  start() {
    this.login(process.env.TOKEN);
  }

  commandkit() {
    new CommandKit({
      client: this,
      commandsPath: "./src/commands",
      eventsPath: "./src/events",
      bulkRegister: true,
      skipBuiltInValidations: true,
    });
  }

  async env() {
    await EnvChecker();
  }
}

export { Bot };
