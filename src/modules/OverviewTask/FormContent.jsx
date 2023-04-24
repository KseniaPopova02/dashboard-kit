import { Form, Field } from "formik";
import { CustomInput } from "./CastomInput";

export const FormContent = ({ handleDeleteAllTasks }) => (
  <Form>
    <div>
      <CustomInput name="taskName" type="text" placeholder="Create new task" />
    </div>
    <div>
      <label>
        <Field type="radio" name="flags" value="urgent" />
        Urgent
      </label>
      <label>
        <Field type="radio" name="flags" value="new" />
        New
      </label>
      <label>
        <Field type="radio" name="flags" value="default" />
        Default
      </label>
    </div>
    <button type="submit">Add Task</button>
    <button type="button" onClick={handleDeleteAllTasks}>
      Delete all tasks
    </button>
  </Form>
);
