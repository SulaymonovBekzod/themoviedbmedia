import client, { BaseUrl, BearerToken } from "./repository";

class Knowpereson {
  async getKnowByName(name, endpoint) {
    const endPoint = `person/${name}/${endpoint}`;
    try {
      const resp = await client.get(BaseUrl + endPoint, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${BearerToken}`,
        },
      });
      return resp.data;
    } catch (err) {
      console.error('Error:', err);
      return err;
    }
  }
}

export default new Knowpereson();
