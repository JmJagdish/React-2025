const Layout = ({ children }) => {
  return (
    <div className="max-w-full flex justify-center p-8 bg-linear-to-br from-teal-600 via-teal-700 to-teal-900">
      {children}
    </div>
  );
};
export default Layout;
