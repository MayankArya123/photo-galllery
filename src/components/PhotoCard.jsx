const PhotoCard = ({ photo, isFavorite, onToggleFavorite }) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg">
      <img
        src={photo.download_url}
        alt={`Photo by ${photo.author}`}
        className="h-56 w-full object-cover"
      />

      <div className="flex items-center justify-between p-4">
        <h3 className="truncate font-medium text-gray-800">{photo.author}</h3>

        <button
          onClick={() => onToggleFavorite(photo.id)}
          aria-label={
            isFavorite ? "Remove from favourites" : "Add to favourites"
          }
          className={`ml-3 text-2xl transition ${
            isFavorite ? "text-red-500" : "text-gray-400"
          }`}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>
    </div>
  );
};

export default PhotoCard;
