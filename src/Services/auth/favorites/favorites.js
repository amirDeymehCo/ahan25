import { Delete, Get, Post } from "../../../utils/axiosHelper/AxiosHelper";

const api = {
  listFavorites: (type) => `/front/favorites?type=${type}`,
  createFavorites: "/front/favorites",
  deleteFavorites: (type, id) => `/front/favorites/${id}?type=${type}`,
};

const FavoritesServices = {
  listFavorites: (type, then) => Get(api.listFavorites(type), {}, then),
  createFavorites: (data, then) => Post(api.createFavorites, data, then),
  deleteFavorites: (type, id, then) =>
    Delete(api.deleteFavorites(type, id), {}, then),
};

export default FavoritesServices;
