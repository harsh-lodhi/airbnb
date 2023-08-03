export default function Image({src,...rest}) {
    src = src && src.includes('https://')
      ? src
      : 'https://airbnb-one-black.vercel.app/uploads/'+src;
    return (
      <img {...rest} src={src} alt={''} />
    );
  }