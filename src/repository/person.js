import client, { BaseUrl, BearerToken } from "./repository";

class Person {
  async getMoviesByName(name) {
    const endPoint = `person/${name}`;
    
    console.log('BaseUrl:', BaseUrl);
    console.log('endPoint:', endPoint);
    console.log('BearerToken:', BearerToken);

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

export default new Person();
