const UIButton = ({ label, onClick }) => {
    return (
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg" onClick={onClick}>
        {label}
      </button>
    );
  };
  
  // Set default props
  UIButton.defaultProps = {
    label: "Click Me",
    onClick: () => alert("Button clicked!"),
  };
  
  export default UIButton;
  