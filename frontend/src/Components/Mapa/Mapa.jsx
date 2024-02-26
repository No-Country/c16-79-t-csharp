const Mapa = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3283.6814070980504!2d-58.36311591687821!3d-34.61221690320792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDM2JzQ0LjAiUyA1OMKwMjEnMjkuNyJX!5e0!3m2!1ses!2suy!4v1708301247038!5m2!1ses!2suy"
        width="300"
        height="250"
        style={{ border: "0" }} // Estilo como objeto JavaScript
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </>
  );
};

export default Mapa;
