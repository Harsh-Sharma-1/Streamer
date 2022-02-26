import React from "react";
import { Routes, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  return (
    <div className="ui container">
      <Header />
      <Routes>
        <Route path="/" element={<StreamList />} />
        <Route
          path="/streams/new"
          element={<StreamCreate navigator={navigate} />}
        />
        <Route
          path="/streams/edit/:id"
          element={<StreamEdit navigator={navigate} />}
        />
        <Route path="/streams/delete/:id" element={<StreamDelete />} />
        <Route path="/streams/show" element={<StreamShow />} />
      </Routes>
    </div>
  );
};

export default App;
