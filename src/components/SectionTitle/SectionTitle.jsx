/* eslint-disable react/prop-types */
const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center my-8">
      <p className="text-yellow-600 mb-2">-------- {subHeading} --------</p>
      <h3 className="border-y-4 py-4 text-3xl uppercase">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
