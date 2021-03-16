import EmptyBg from "../assets/illustration-empty.svg";

const Empty = () => {
  return (
    <div className="empty">
      <img src={EmptyBg} alt="no more invoices" />
    </div>
  );
};

export default Empty;
