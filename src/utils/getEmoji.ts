import emotes from "#root/config/emoji.config.ts";

export function getEmoji(name) {
    return emotes[name] ?? "";
}
