const GOOGLE_API_KEY = `AIzaSyB9djp0luwbeqFaKCkgLQ1k68IlU00bdBI`

export const getMapPreview = (lat, lng) => {
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`
    console.log(imagePreviewUrl);
    
    return imagePreviewUrl;
}