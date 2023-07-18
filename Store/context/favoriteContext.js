import { createContext, useState } from 'react';

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: id => {},
  removeFavorite: id => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavorite = id => {
    setFavoriteMealIds(currentIds => [...currentIds, id]);
  };

  const removeFavorite = id => {
    setFavoriteMealIds(currentIds => currentIds.filter(mealId => mealId !== id));
  };

  const favoriteState = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return <FavoriteContext.Provider value={favoriteState}>{children}</FavoriteContext.Provider>;
};

export default FavoritesContextProvider;
