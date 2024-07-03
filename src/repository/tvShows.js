import client, { BaseUrl, BearerToken } from "./repository";

class TvShows {
  getMoviesByName(endpoint,name) {
    const endPoint = `tv/${endpoint}${name}`;

    const tvShow = client
      .get(BaseUrl + endPoint, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${BearerToken}`,
        },
      })
      .then((resp) => {
        return resp.data;
      })
      .catch((err) => {
        return err;
      });

    return tvShow;
  }

}

export default new TvShows()