import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { editStream, fetchStream } from "../../actions";
import _ from "lodash";
import { useEffect } from "react";
import StreamForm from "./StreamForm";

const StreamEdit = (props) => {
  const param = useParams();

  useEffect(() => {
    props.fetchStream(param.id);
  }, [props]);

  const onSubmit = (formValues) => {
    props.editStream(param.id, formValues, props.navigator);
  };

  if (!props.stream) {
    return <div>Loading</div>;
  } else {
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(props.stream[param.id], "title", "description")}
          onSubmit={onSubmit}
          stream={props.stream}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    stream: state.streams,
  };
};

export default connect(mapStateToProps, { editStream, fetchStream })(
  StreamEdit
);
