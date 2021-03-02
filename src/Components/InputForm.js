import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const InputForm = ({ addItem }) => {
  let newTask = "";
  const handleInput = (e) => {
    newTask = e.target.value;
  };
  return (
    <Form inline onSubmit={addItem}>
      <Form.Label htmlFor="inlineFormInputName2" srOnly>
        Name
      </Form.Label>
      <Form.Control
        className="mb-2 mr-sm-2"
        id="inlineFormInputName2"
        placeholder="Add a new task...."
        onChange={(e) => {
          newTask = e.target.value;
        }}
      />
      {console.log(newTask)}

      <Button type="submit" className="mb-2">
        +
      </Button>
    </Form>
  );
};

export default InputForm;
