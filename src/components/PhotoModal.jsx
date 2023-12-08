import "./photoModal.css";

export const PhotoModal = (props) => {
  const classOption = props.isOpen ? "modal is-open" : "modal";
  return (
    <>
      <article className={classOption}>
        <div className="modal-image-container">
          <img
            src={props.item.urls.full}
            alt={props.item.alt_description}
          ></img>
          <button onClick={props.handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26"
              width="26"
              viewBox="0 0 512 512"
            >
              <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
            </svg>
          </button>
        </div>
      </article>
    </>
  );
};
