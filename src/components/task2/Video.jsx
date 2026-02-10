export default function Video(props) {
    // console.log(props);
    return (
        <div className="item item-video">
            {/* <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
            <iframe src={props.url} allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
};
