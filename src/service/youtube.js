class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }
  //axios를 쓰는지 외부에서 모르게 하고 싶다면 위의 코드처럼 작성
  // constructor(key) {
  //   this.youtube = axios.create({
  //     baseURL: 'https://www.googleapis.com/youtube/v3',
  //     params: { key: key },
  //   });
  // }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: query,
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}

export default Youtube;
