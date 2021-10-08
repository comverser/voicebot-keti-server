/* -------------------------------------------------------------------------- */
/*                                API endpoints                               */
/* -------------------------------------------------------------------------- */
const gnictProcPort = "20080";
const gnictChatPort = "20443";
const gnictHost = "10.1.92.1";

const ketiPort = "28443";
const ketiHost = "ketiair.com";

/* -------------------------------------------------------------------------- */
/*                                Debug setting                               */
/* -------------------------------------------------------------------------- */
export const debugMode = true;

/* -------------------------------------------------------------------------- */
/*                                Don't change                                */
/* -------------------------------------------------------------------------- */
const protocol = "https";
const pathTalk = "talk";
const pathOffer = "offer";
const pathSettings = "settings";

export const settingsEndpoint = `${protocol}://${gnictHost}:${gnictChatPort}/${pathSettings}`;
export const offerLocalEndpoint = `${protocol}://${gnictHost}:${gnictProcPort}/${pathOffer}`;
export const talkEndpoint = `${protocol}://${gnictHost}:${gnictProcPort}/${pathTalk}`;

export const offerRemoteEndpoint = `${protocol}://${ketiHost}:${ketiPort}/${pathOffer}`;