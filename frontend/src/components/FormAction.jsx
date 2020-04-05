import React, { useRef, useState } from "react";
import { useForm } from "../hooks/useForm";
import Input from "./Input";
import "../styles/FormAction.css";

const FormAction = () => {
  // TODO Handle input errors
  const { formValues, getInputProps, setFormValues } = useForm({
    links: [],
    tags: [],
    medias: [],
  });

  const [tmpMediasUrl, setTmpMediasUrl] = useState([]);

  //  TODO Add setTags to the array in order to set the tags array when getting
  // the response from the database
  const [tags] = useState([
    "exercise",
    "self-care",
    "entertainment",
    "whatever",
    "movie",
    "movie",
    "movie",
    "movie",
    "movie",
  ]);

  const linkInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const selectedImageInput = (e) => {
    imageInputRef.current.click();
  };

  const handleSubmit = () => {
    console.log(formValues);
    console.log("Dont forget to transform this into a form data");
    console.log("Post it wherever...");
  };

  const handleImages = (e) => {
    //   TODO
    if (tmpMediasUrl.length === 5) {
      // TODO Insert error handler here
      return;
    }
    if (e.target.files.length + tmpMediasUrl.length > 5) {
      // TODO Insert error handler here
      return;
    }
    const tmpUrl = [];
    const mediaFiles = [];
    for (let file of e.target.files) {
      let url = URL.createObjectURL(file);
      mediaFiles.push(file);
      tmpUrl.push({ type: file.type, url });
    }
    setFormValues({
      ...formValues,
      medias: [...formValues.medias, ...mediaFiles],
    });
    setTmpMediasUrl([...tmpMediasUrl, ...tmpUrl]);
  };

  const addLink = (e) => {
    //   TODO Regex link validation

    setFormValues({
      ...formValues,
      links: [linkInputRef.current.value, ...formValues.links],
    });
    linkInputRef.current.value = "";
    linkInputRef.current.focus();
  };

  const removeLink = (index) => {
    setFormValues({
      ...formValues,
      links: formValues.links.filter((l, i) => i !== index),
    });
  };

  const selectedState = (tag) => {
    return formValues.tags.includes(tag) ? "tag selected" : "tag";
  };

  const handleTagSelect = (tag) => {
    if (formValues.tags.includes(tag)) {
      setFormValues({
        ...formValues,
        tags: formValues.tags.filter((formTag) => formTag !== tag),
      });
    } else {
      if (formValues.tags.length === 4) return;
      setFormValues({
        ...formValues,
        tags: [...formValues.tags, tag],
      });
    }
  };

  const tagList = (
    <div className="tags">
      {tags.map((tag, i) => (
        <div
          className={selectedState(tag)}
          onClick={handleTagSelect.bind(null, tag)}
          key={i}
        >
          {tag}
        </div>
      ))}
    </div>
  );

  return (
    <div className="form-action">
      <div className="col">
        <div className="form-group">
          <label htmlFor="title">Action Title</label>
          <Input id="title" type="text" {...getInputProps("title")} />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <Input id="category" type="text" {...getInputProps("category")} />
        </div>

        <div className="form-group">
          <label htmlFor="tags">Tags (max 4)</label>
          {tagList}
        </div>

        <div className="form-group">
          <label htmlFor="goal">Goal</label>
          <textarea
            name="goal"
            id="goal"
            cols="30"
            rows="10"
            {...getInputProps("goal")}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            {...getInputProps("description")}
          ></textarea>
        </div>
      </div>
      <div className="col">
        <div className="form-group">
          <button onClick={selectedImageInput}>Add</button>{" "}
          <div>Add image or video (max 5)</div>
          <input
            ref={imageInputRef}
            type="file"
            multiple
            onChange={handleImages}
            style={{ display: "none" }}
          />
          {tmpMediasUrl.map((resource, i) => (
            <React.Fragment key={i}>
              {resource.type.includes("image") && (
                <img
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                  src={resource.url}
                />
              )}
              {resource.type.includes("video") && (
                <video
                  width="150"
                  height="150"
                  controls="controls"
                  preload="metadata"
                >
                  <source src={resource.url + "#t=0.5"} type={resource.type} />
                </video>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <Input id="location" type="text" {...getInputProps("location")} />
        </div>

        <div className="form-group">
          <label htmlFor="links">Links</label>
          <Input ref={linkInputRef} id="links" type="text" name="links" />
          <button onClick={addLink}>+</button>
          <div className="links-preview">
            {formValues.links.map((link, i) => (
              <div key={i}>
                {link} <span onClick={removeLink.bind(null, i)}>X</span>
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleSubmit}>POST THE ACTION</button>
      </div>
    </div>
  );
};

export default FormAction;
