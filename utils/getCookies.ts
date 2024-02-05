import CookieManager from "@react-native-cookies/cookies";

async function getCookies() {
  let data;

  try {
    const cookies = await CookieManager.get("http://192.168.0.194:8000");

    if (typeof cookies === "object" && Object.keys(cookies).length > 0) {
      data = cookies;
    }
  } catch (error) {
    throw new Error(`Something went wrong with setting cookies ${error}`);
  }

  return data;
}

export default getCookies;
