import * as request from "./requester";

const BASE_URL = 'http://localhost:3030/jsonstore/repairs';

export const getAll = async () => {
  try {
    const result = await request.get(BASE_URL);
    const orders = Object.values(result);
    return orders;

  } catch (error) {
    console.log(error.message);
    throw new Error('Unable to fetch orders. Please try again later.');
  }
};

export const createOrder = async (data) => {
  const result = await request.post(`${BASE_URL}`, data)
  return result;
}

/*export const updateOrder = async (data, campaignId) => {
  const result = await requester.put(`${BASE_URL}/edit/${campaignId}`, data)
  return result;
}*/

export const getCurrentOrder = (orderId) => request.get(`${BASE_URL}/${orderId}`);



/*export const deleteCampaign = async (campaignId) => {
  try {
    const result = await requester.del(`${BASE_URL}/delete/${campaignId}`);
    return result;
  } catch (error) {
    console.log('Error delete a campaign:', error.message);
    throw new Error('Unable to delete campaign. Please try again later.');
  }
}*/

const ordersApi = {
  getAll,
  getCurrentOrder
};

export default ordersApi;