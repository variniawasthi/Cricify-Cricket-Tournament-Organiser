const Breadcrumbs = () => {
    return (
      <div className="flex items-center mx-[4rem] my-[1rem] px-1 bg-transparent text-md">
        <a href="#" className="mr-2 hover:text-blue-600">
          Home
        </a> 
        <span className="mr-2">/</span>
        <a href="#" className="hover:text-blue-600">
          Category
        </a>
      </div>
    );
  };
  
  export default Breadcrumbs;