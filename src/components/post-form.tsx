import {  useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Textarea = styled.textarea`
  border: 2px solid white;
  padding: 20px;
  border-radius: 20px;
  font-size: 1rem;
  color: white;
  background-color: black;
  width: 100%;
  resize: none;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  &::placeholder {
    font-size: 1rem;
  }
  &:focus {
    outline: none;
    border-color: #0066ff;
  }
`;

const AttachFileButton = styled.label`
  padding: 10px 0;
  color: #0066ff;
  text-align: center;
  border-radius: 20px;
  border: 1px solid #0066ff;
  font-size: 14px;
  font-wight: 600;
  cursor: pointer;
  &:hover {
    background-color: #0066ff;
    color: white;
  }
`;

const AttachFileInput = styled.input`
  display: none;
`;

const SubmitButton = styled.input`
  background-color: #0066ff;
  color: white;
  border: none;
  padding: 10px 0;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  &:hover,
  &:active {
    opacity: 0.8;
  }
`;

const PostForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [xPost, setXPost] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setXPost(e.target.value);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    console.log("files", files);
    if (files && files.length === 1) {
      setFile(files[0]);
    }
  };

  return (
    <Form>
      <Textarea placeholder="오늘은 무슨일이 있었나요?" rows={5} maxLength={180} onChange={onChange} value={xPost} />
      <AttachFileButton htmlFor="file">{file ? "Photo added ✅" : "Add Photo"}</AttachFileButton>
      <AttachFileInput id="file" type="file" accept="image/*" onChange={onFileChange} />
      <SubmitButton type="submit" value={isLoading ? "Posting..." : "Post memo"} />
    </Form>
  );
};

export default PostForm;
