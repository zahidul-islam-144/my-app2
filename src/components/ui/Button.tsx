import { toCapitalizeFirstLetter } from "@/utils/helperFunctions";
import { Button } from "antd";

type TButtonProps = {
  type: "submit" | "button" | "reset";
  onClick?: () => void | any;
  name?: string;
  disabled?: boolean;
  className?: string;
}

type TProps = {
  content: string;
} & TButtonProps;

const ReusableButton = ({
  content,
  type,
  onClick,
  name,
  disabled = false,
  className
}: TProps) => {
  return (
    <Button className={className} htmlType={type} onClick={onClick} name={name} disabled={disabled}>
     { toCapitalizeFirstLetter(content)}
    </Button>
  );
};

export default ReusableButton;
