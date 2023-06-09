const axios = require('axios');
const { expect } = require('chai');

describe('Weather API', function() {
  it('should return weather data for a specific location', async function() {
    const location = 'London';
    //const apiKey = '98b562f8271473ca272849f1f58b8227';

    try {
      const response = await axios.get(`http://localhost:3000/weather/${location}?apiKey=${'98b562f8271473ca272849f1f58b8227'}`);
      expect(response.status).to.equal(200);
      expect(response.data).to.have.property('location');
      expect(response.data).to.have.property('temperature');
      expect(response.data).to.have.property('description');
    } catch (error) {
      throw new Error(`Request failed: ${error}`);
    }
  });
});
