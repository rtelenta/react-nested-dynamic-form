const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
