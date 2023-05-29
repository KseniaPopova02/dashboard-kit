// import React from "react";
// import { useField, useFormikContext } from "formik";

// export const CustomPhotoInput = ({ label, ...props }) => {
//   const { setFieldValue } = useFormikContext();
//   const [field, meta, helpers] = useField(props.name);

//   const handleChange = (event) => {
//     const file = event.target.files[0];
//     setFieldValue(field.name, file);
//   };

//   return (
//     <div>
//       <div>{label}</div>
//       <input onChange={handleChange} {...field} {...props} />
//       {meta.touched && meta.error && <div>{meta.error}</div>}
//     </div>
//   );
// };

import React from "react";
import { Field, ErrorMessage } from "formik";

export const CustomPhotoInput = () => {
  return (
    <Field name="photo">
      {({ field, form }) => (
        <div>
          <input
            name="photo"
            type="file"
            accept="image/*"
            onChange={(event) =>
              form.setFieldValue(field.name, event.target.files[0])
            }
          />
          <ErrorMessage name="photo" component="div" />
        </div>
      )}
    </Field>
  );
};

// import React from "react";
// import { useField } from "formik";

// export const CustomPhotoInput = ({ label, ...props }) => {
//   const [field, meta, helpers] = useField(props);

//   const handleChange = (event) => {
//     const file = event.target.files[0];
//     helpers.setValue(file);
//   };

//   return (
//     <div>
//       <div>{label}</div>
//       <input
//         {...field}
//         {...props}
//         type="file"
//         accept="image/*"
//         onChange={handleChange}
//       />
//       {meta.touched && meta.error && <div>{meta.error}</div>}
//     </div>
//   );
// };
