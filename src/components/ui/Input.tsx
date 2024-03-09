import { TInputType } from "@/types/form.type";
import { Form, Input } from "antd";
import { Controller } from "react-hook-form";


type TFormFieldProps = {
  type: TInputType;
  name: string;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
};

const FormInput = ({ name, label, type, disabled, placeholder }: TFormFieldProps) => {
  return (
    <>
      <Controller
        name={name}
        defaultValue = ''
        render={({ field , fieldState: { error } }) => (
            <Form.Item
              label={label}
              validateStatus={error?.message ? "error" : ""}
              help={error?.message || ''}
            >
              <Input
                {...field}
                type={type}
                id={name}
                disabled={disabled}
                placeholder={placeholder}
                size="large" 
              />
              {/* {error && <small>{error?.message}</small>} */}
            </Form.Item>
          )
        }
      />
    </>
  );
};

export default FormInput;
