import { Conversation } from "@grammyjs/conversations";
import { MyContext } from "..";

export async function creation(conversation: Conversation<MyContext>, ctx: MyContext) {
    console.log("enter creation");
}