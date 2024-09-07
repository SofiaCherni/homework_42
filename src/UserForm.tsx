import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object({
  title: Yup.string()
    .min(2, 'Мінімум 2 символи')
    .max(10, 'Максимум 10 символів')
    .required('Це поле є обовʼязковим'),
  text: Yup.string()
    .min(5, 'Мінімум 5 символів')
    .max(50, 'Максимум 50 символів')
    .required('Це поле є обовʼязковим'),
});

const UserForm = ({ onSubmit }: { onSubmit: (values: { title: string; text: string }) => void }) => {
  const initialValues = { title: '', text: '' };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();  // Очистка
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field className="input" name="title" type="text" placeholder="Заголовок" />
            <ErrorMessage name="title" component="div" className="error" />
          </div>
          <div>
            <Field className="input" name="text" type="text" placeholder="Текст" />
            <ErrorMessage name="text" component="div" className="error" />
          </div>
          <button className="myButton" type="submit" disabled={isSubmitting}>
            Додати нотатку
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;