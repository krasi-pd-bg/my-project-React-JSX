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

export const updateOrder = async (data, campaignId) => {
  const result = await request.put(`${BASE_URL}/${campaignId}`, {...data, _id: campaignId})
  return result;
}

export const getCurrentOrder = async (orderId) => {
  const result = await request.get(`${BASE_URL}/${orderId}`)
  return result;
}



export const deleteOrder = async (orderId) => {
  try {
    const result = await request.del(`${BASE_URL}/${orderId}`);
    return;
  } catch (error) {
    console.log('Error delete a current order:', error.message);
    throw new Error('Unable to delete current order. Please try again later.');
  }
}

const ordersApi = {
  getAll,
  getCurrentOrder,
  updateOrder,
  deleteOrder
};

export default ordersApi;