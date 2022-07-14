import BasicForm from "../Forms/BasicForm";

const Checkout = (props) => {
  return <BasicForm onSave={props.onSubmit} />;
};

export default Checkout;
