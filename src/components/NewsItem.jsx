import image from '../assets/news.jpg'

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 h-100">
      <img
        src={src ? src : image}
        style={{ height: "200px"}}
        className="card-img-top"
        alt="news"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title ? title.slice(0, 50) : "No Title"}</h5>
        <p className="card-text flex-grow-1">
          {description ? description.slice(0, 90) : "No description available."}
        </p>
        <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary mt-auto">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
