import "./Default.css";
import Header from "../../../UI/organisms/header/Header";

interface props {
  logo: string;
  externalHref: string;
  primaryText: string;
  secondaryText: string;
}

function Default(props: props) {
  return (
    <div className="default-home-template">
      <Header
        logo={props.logo}
        primaryText={props.primaryText}
        externalHref={props.externalHref}
        secondaryText={props.secondaryText}
      />
    </div>
  );
}

export default Default;
