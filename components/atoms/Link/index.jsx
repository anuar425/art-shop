import Link from "next/link";

function NextLink(props) {
  return (
    <Link href={props.href} {...props}>
      {props.children}
    </Link>
  );
}

export default NextLink;
