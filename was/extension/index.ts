import { NodeCG } from "nodecg-types/types/server";
import { TwitchChatServiceClient } from "nodecg-io-twitch-chat";
import { requireService } from "nodecg-io-core";
import { WasCommandManager } from "./WasCommandManager";
import { TwitchApiServiceClient } from "nodecg-io-twitch-api";
import { SQLClient } from "nodecg-io-sql";

module.exports = function (nodecg: NodeCG) {
    const chatClient = requireService<TwitchChatServiceClient>(nodecg, "twitch-chat");

    // Required scopes: none
    const twitchApi = requireService<TwitchApiServiceClient>(nodecg, "twitch-api");

    const sqlClient = requireService<SQLClient>(nodecg, "sql");

    new WasCommandManager(chatClient, twitchApi, sqlClient, nodecg);
};
