import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import favoritesReducer, {
  initialFavorites,
} from "../reducers/FavouritesReducer";
import SearchBar from "./SearchBar";
import PhotoCard from "./PhotoCard";

const Gallery = () => {
  const { photos, loading, error } = useFetchPhotos();
  const [search, setSearch] = useState("");
  const [favorites, dispatch] = useReducer(
    favoritesReducer,
    undefined,
    initialFavorites,
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = useCallback((value) => {
    setSearch(value);
  }, []);

  const handleToggleFavorite = (id) => {
    dispatch({
      type: "TOGGLE_FAVORITE",
      payload: id,
    });
  };

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase()),
    );
  }, [photos, search]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <p className="rounded-lg bg-red-100 p-4 text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Photo Gallery</h1>
          <p className="mt-2 text-gray-500">
            Explore beautiful photos from different photographers.
          </p>
        </div>

        <div className="mb-8 max-w-md">
          <SearchBar search={search} onSearchChange={handleSearch} />
        </div>

        <p className="mb-5 text-sm text-gray-600">
          Showing {filteredPhotos.length} of {photos.length} photos
        </p>

        {filteredPhotos.length === 0 ? (
          <div className="rounded-xl bg-white p-10 text-center">
            <p className="text-gray-500">No photos found for "{search}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {filteredPhotos.map((photo) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                isFavorite={favorites.includes(photo.id)}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
