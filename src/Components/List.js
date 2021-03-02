import {
    Button,
    Field,
    Form,
    RadioGroup,
    Select,
  } from 'react-form-package';


  const MyForm = (props) => (
    <Form
      validate
    >
      <div>
        <div>checkbox</div>
        <Field type="checkbox" id="checkbox" />
      </div>
      <div>
        <div>textarea</div>
        <Field rows="5" cols="30" type="textarea" id="textarea" />
      </div>
      <div>
        <div>date</div>
        <Field type="date" id="date" />
      </div>
      <div>
        <div>datetime-local</div>
        <Field type="datetime-local" id="datetime-local" />
      </div>
      <div>
        <div>email</div>
        <Field type="email" id="email" />
      </div>
      <div>
        <div>number</div>
        <Field type="number" id="number" />
      </div>
      <div>
        <div>tel</div>
        <Field type="tel" id="tel" />
      </div>
      <div>
        <div>text</div>
        <Field type="text" id="text" />
      </div>
      <div>
        <div>password</div>
        <Field type="password" id="password" />
      </div>
      <div>
        <div>time</div>
        <Field type="time" id="time" />
      </div>
      <div>
        <div>url</div>
        <Field type="url" id="url" />
      </div>
      <div>
        <div>select</div>
        <Select id="select" type="select">
          <option disabled value="">--- Choose an option ---</option>
          <option value="option1">option 1</option>
          <option value="option2">option 2</option>
          <option value="option3">option 3</option>
        </Select>
      </div>
      <div>
        <div>radio</div>
        <RadioGroup type="radio" id="radio">
          <input type="radio" name="radio" id="radio1" />
          radio 1
          <input type="radio" name="radio" id="radio2" />
          radio 2
          <input type="radio" name="radio" id="radio3" />
          radio 3
        </RadioGroup>
      </div>
      <div>
        <Button id="submit" type="submit" onClick={(state) => console.log(state)}>submit</Button>
      </div>
    </Form>
    );
    export default  MyForm