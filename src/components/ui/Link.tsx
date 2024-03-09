import Link from "next/link";
import { toCapitalizeFirstLetterInSentence } from "../../utils/helperFunctions";

type TLinkProps = {
  href: string;
  onClick?: () => void | any;
};

type TProps = {
  contents: string;
} & TLinkProps;

const ResuableLink = ({ href, contents, onClick }: TProps) => {
  return (
    <Link href={href} onClick={onClick}>
      {toCapitalizeFirstLetterInSentence(contents)}
    </Link>
  );
};

export default ResuableLink;
