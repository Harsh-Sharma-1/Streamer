import React from "react";
import Modal from "../Modal";
import { Link, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchStream, deleteStream } from "../../actions";

const StreamDelete = (props) => {
  const param = useParams();
  useEffect(() => {
    props.fetchStream(param.id);
  });

  const navigate = useNavigate();

  const actions = (
    <>
      <button
        className="ui button negative"
        onClick={() => props.deleteStream(param.id, navigate)}
      >
        Delete
      </button>
      <Link className="ui button" to="/">
        Cancel
      </Link>
    </>
  );

  const renderContent = () => {
    if (!props.streams[param.id]) {
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure you want to delete this stream with title: ${
      props.streams[param.id].title
    }`;
  };

  return (
    <Modal
      title="Delete Stream"
      content={renderContent()}
      actions={actions}
      onDismiss={() => navigate("/")}
      data={props.streams[param.id]}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    streams: state.streams,
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
