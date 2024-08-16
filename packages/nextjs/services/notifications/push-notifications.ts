import { PushAPI } from "@pushprotocol/restapi";
import { ENV } from "@pushprotocol/restapi/src/lib/constants";
import * as dotenv from "dotenv";
import { getSigner } from "~~/lib/notifications.lib";

dotenv.config();

export const sendPushNotifications = async (blockExplorerInternalTxURL: string) => {
  const signer = getSigner(process.env.NEXT_PUBLIC_PUSH_NOTIFICATIONS_SIGNER as string);

  const sprayChannel = await PushAPI.initialize(signer, { env: ENV.STAGING });

  const { items } = await fetch(blockExplorerInternalTxURL).then(res => res.json());

  const senderTitle = `ConConfianza envia un mensaje`;
  //const senderBody = `${items[0].from.hash} te ha enviado dinero! 💰 `;
  const senderBody = `${items[0].from.hash} te ha enviado tu prestamo! 💰 `;

  sprayChannel.channel.send([items[0].to.hash, "0x9c0c33fa6c288D2Dd2975B82EA033b9e09f2283F"], {
    notification: {
      title: senderTitle,
      body: senderBody,
    },
    payload: {
      cta: "",
      title: senderTitle,
      body: senderBody,
    },
  });
};
