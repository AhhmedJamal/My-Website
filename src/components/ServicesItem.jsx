// eslint-disable-next-line react/prop-types
function ServicesItem({ icon, title, description }) {
  return (
    <div className="min-h-[140px] max-w-[800px]">
      <div className="title text-primaryColor">
        {icon} {title}
      </div>
      <p className="text-xs text-grey p-6">{description}</p>
    </div>
  );
}

export default ServicesItem;
