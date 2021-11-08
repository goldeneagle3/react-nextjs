/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
        display: "flex",
        cursor: "pointer",
        mr: 15,
        textDecoration: "none",
      }}
      {...rest}
    >
      <Image src={src} alt="Logo" />
    </Link>
  );
}


const styles = {
  boyut: {
    width: "105px",
    height: "105px",
  },
};