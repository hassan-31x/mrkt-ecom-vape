import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    transform: "translateY(-50%)",
  },
  overlay: {
    backgroundColor: "rgba(77,77,77,0.6)",
    zIndex: "9000",
  },
};

Modal.setAppElement("body");

function VideoModal(props) {
  const { showModal } = props;

  const closeHandler = () => {
    document
      .querySelector("#video-modal")
      .classList.remove("ReactModal__Content--after-open");

    if (document.querySelector(".ReactModal__Overlay")) {
      document.querySelector(".ReactModal__Overlay").style.opacity = "0";
    }

    setTimeout(() => {
      props.hideVideo();
    }, 350);
  };

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={closeHandler}
      style={customStyles}
      contentLabel="Video Modal"
      className="video-modal p-3"
      shouldReturnFocusAfterClose={false}
      id="video-modal"
    >
      <button type="button" className="close" onClick={closeHandler}>
        <span aria-hidden="true">
          <i className="icon-close"></i>
        </span>
      </button>
      <iframe
        className="mfp-iframe modal-content"
        src="//www.youtube.com/embed/vBPgmASQ1A0?autoplay=1"
        frameBorder="0"
        allowFullScreen=""
        title="youtube"
      ></iframe>
    </Modal>
  );
}

export default VideoModal;
